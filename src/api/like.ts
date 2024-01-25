import request from './request';
import { APIs, timeout } from './config';
import { handleError } from './handleError';
import { createRequest } from './core';

export const findLike = async (likeID = null) => {
    try {
        const result = await request().get(`like/${likeID}`,);
        const { data } = result;

        return {
            success: true,
            data,
        };
    } catch (e) {
        return handleError(e);
    }
};
export const checkLike = async (postID = null, userId = null) => {
    try {
        const result = await request().get(`like?postId=${postID}&userId=${userId}`,);
        const { data } = result;
        return {
            success: true,
            data,
        };
    } catch (e) {
        return handleError(e);
    }
};
export const like = async (cmtItem = {}) => {
    try {
        const result = await request().post(`like`, cmtItem);
        const { data } = result;
        console.log('like success');

        return {
            success: true,
            data,
        };
    } catch (e) {
        return handleError(e);
    }
};
export const unlike = async (likeID = '') => {
    // console.log('un like id ', likeID);

    try {
        if (likeID != '') {
            const result = await request().delete(
                `like/${likeID}?_embed=posts`,
            );
            // const result = await request().delete(
            //     `comments/${cmtID}?_embed=comments`,
            // );
            const { data } = result;
            console.log('un liked');
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
