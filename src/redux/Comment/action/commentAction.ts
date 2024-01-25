import { CREATE_COMMENT,DELETE_COMMENT,FEATCH_COMMENT } from '../reducer/commentReducer';
import { createComment, deleteComment, getCommentForPost } from '../../../api/comment';

export const featchComment = (postID='') => async dispatch =>{
    try {
        // console.log('dax den day');
        
            const result = await getCommentForPost(postID);
            // console.log(result);
            
        dispatch({
            type:FEATCH_COMMENT,
            data:result.data
        })
    } catch (error) {
        
    }
}
export const createCmtAction = (cmtItem={}) => async dispatch =>{
    try {
            // const result = await createComment(data);
            console.log('cmt action ',cmtItem);
        
        dispatch({
            type:CREATE_COMMENT,
            userId:cmtItem.userId,
            postId:cmtItem.postId,
            content:cmtItem.content,
            createDate:cmtItem.createDate,
            id:cmtItem.id,
            user: cmtItem.user,
        })
    } catch (error) {
        
    }
}
export const deleteCmtAction = (cmtItem = {}) => async dispatch => {
    try {
        console.log('delete cmt ', cmtItem);

        const result = await deleteComment(cmtItem);

        
        dispatch({
            type:DELETE_COMMENT,
            id:cmtItem,
        })
    } catch (error) {

    }
}