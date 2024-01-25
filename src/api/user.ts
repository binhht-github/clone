import request from './request'
import { APIs, timeout } from './config'
import { handleError } from './handleError'
import { createRequest } from './core'

export const login = async (email='', passWord='') => {
  try {
    // const result = await request().get(`${APIs.MUSIC}`)
    const result = await request().get(`users/?email=${email}`)
    const { data } = result

    return {
      success: true,
      data,
    }
  } catch (e) {
    return handleError(e)
  }
}
