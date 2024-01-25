import request from './request'
import { APIs, timeout } from './config'
import { handleError } from './handleError'
import { createRequest } from './core'



// http://192.168.1.3:3000/posts?userId=5&userId=4&_embed=like&_embed=save&_embed=comments&_expand=user


export const getPostForYou = async () => {
  try {
    // const result = await request().get(`${APIs.MUSIC}`)
    const result = await request().get(`posts/?userId_ne=1&_embed=like&_embed=save&_embed=comments&_expand=user`)
    const { data } = result

    return {
      success: true,
      data,
    }
  } catch (e) {
    return handleError(e)
  }
}
export const getPostFollower = async () => {
  try {
    // const result = await request().get(`${APIs.MUSIC}`)
    const result = await request().get(`posts?userId=5&userId=4&_embed=like&_embed=save&_embed=comments`)
    const { data } = result

    return {
      success: true,
      data,
    }
  } catch (e) {
    return handleError(e)
  }
}
