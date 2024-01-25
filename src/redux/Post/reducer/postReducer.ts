export const CREATE_POST = "CREATE_POST"
export const DELETE_POST = "DELETE_POST"
export const FEACTH_POST = "FEACTH_POST"
export const UPDATE_TYM_CMT = "UPDATE_TYM_CMT"
export const UPDATE_SAVE_POST = "UPDATE_SAVE_POST"

const initialState = []

export default function postReducer(state = initialState, payload = {}) {
    switch (payload.type) {
        case CREATE_POST:
            {
                console.log('paload ', payload);
                break
            }
        case FEACTH_POST:
            {
                const a = payload.data
                return a
            }
        case UPDATE_TYM_CMT: {
            state.find((item, index) => {
                if (item.id == payload.postId) {
                    const i = item.like.findIndex(obj => obj.postId == payload.postId && obj.userId == payload.userId)
                    if (i === -1) {
                        item.like.push(payload)
                    }
                    if (i != -1) {
                        item.like.splice(i, 1)
                    }
                }
            })
        }
        case UPDATE_SAVE_POST: {
            // console.log('payload ', payload);

            state.find((item, index) => {
                if (item.id == payload.postId) {
                    const i = item.save.findIndex(obj => obj.postId == payload.postId && obj.userId == payload.userId)
                    if (i === -1) {
                        item.save.push(payload)
                    }
                    if (i != -1) {
                        item.save.splice(i, 1)
                    }
                }
            })
        }
        default: return state
    }
}