
import { UPDATE_SAVE_POST } from "../../Post/reducer/postReducer";


export const saveAction = (saveItem = {}) => async dispatch => {
    try {

        // console.log(saveItem);

        dispatch({
            type: UPDATE_SAVE_POST,
            userId: saveItem.userId,
            postId: saveItem.postId,
            createDate: saveItem.createDate,
            id: saveItem.id
        })
    }
    catch {
        e => console.log(e);
    }
}