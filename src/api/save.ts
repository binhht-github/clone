import request from './request';
import { APIs, timeout } from './config';
import { handleError } from './handleError';
import { createRequest } from './core';

export const findSave = async (likeID = null) => {
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
export const checkSave = async (postID = null, userId = null) => {
    try {
        const result = await request().get(`save?postId=${postID}&userId=${userId}`,);
        const { data } = result;
        return {
            success: true,
            data,
        };
    } catch (e) {
        return handleError(e);
    }
};
export const save = async (saveItem = {}) => {
    try {
        const result = await request().post(`save`, saveItem);
        const { data } = result;
        console.log('save success');

        return {
            success: true,
            data,
        };
    } catch (e) {
        return handleError(e);
    }
};
export const unSave = async (saveID = '') => {
    // console.log('un like id ', likeID);

    try {
        if (saveID != '') {
            const result = await request().delete(
                `save/${saveID}?_embed=posts`,
            );
            const { data } = result;
            console.log('un saved');
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
