
import { UPDATE_TYM_CMT } from "../../Post/reducer/postReducer";
import { LIKE } from "../reducer/likeReducer";


export const likeAction = (likeItem = {}) => async dispatch => {
    try {

        // console.log(likeItem);

        dispatch({
            type: UPDATE_TYM_CMT,
            userId: likeItem.userId,
            postId: likeItem.postId,
            createDate: likeItem.createDate,
            id: likeItem.id
        })
    }
    catch {
        e => console.log(e);
    }
}