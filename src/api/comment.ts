import request from './request';
import {APIs, timeout} from './config';
import {handleError} from './handleError';
import {createRequest} from './core';

export const getCommentForPost = async (postID = null) => {
  try {
    const result = await request().get(
      `comments/?_expand=user&postId=${postID}`,
    );
    const {data} = result;

    return {
      success: true,
      data,
    };
  } catch (e) {
    return handleError(e);
  }
};
export const createComment = async (cmtItem = {}) => {
  try {
    const result = await request().post(`comments?_expand=user`, cmtItem);
    const {data} = result;
    console.log('cmt success');
    
    return {
      success: true,
      data,
    };
  } catch (e) {
    return handleError(e);
  }
};
export const deleteComment = async (cmtID = '') => {
  console.log(cmtID);
  
  try {
    if (cmtID != '') {
      const result = await request().delete(`comments/${cmtID}?_embed=comments`);
      const {data} = result;
      return {
        success: true,
        data,
      };
    }
    return {
      success: false,
    };
  } catch (e) {
    return handleError(e);
  }
};
