export const FEATCH_COMMENT = "FEATCH_COMMENT"
export const CREATE_COMMENT = "CREATE_COMMENT"
export const DELETE_COMMENT = "DELETE_COMMENT"

// const initialState =  {
//   userId: '',
//   postId: '',
//   content: '',
//   createDate: '',
//   id: '',
//   user: {
//     id: '',
//     email: '',
//     userName: '',
//     passWord: '',
//     avtSrc: '',
//     follower: '',
//     createDate: '',
//   },
// }

const initialState = []

export default function commentReducer(state = initialState, payload = {}) {
    switch (payload.type) {
        case FEATCH_COMMENT:
            {
                const data = payload.data
                return data
            }
        case CREATE_COMMENT:
            {
                console.log('create cmt');

                // break 
                return [
                    ...state,
                    {
                        userId: payload.userId,
                        postId: payload.postId,
                        content: payload.content,
                        createDate: payload.createDate,
                        id: payload.id,
                        user: payload.user
                    }
                ]
            }
        case DELETE_COMMENT:
            {

                // console.log('payload ', payload);
                // const stateTemp = 
                // console.log(stateTemp);

                return state.filter((item, index) => {
                    if (item.id != payload.id) {
                        console.log(item);
                        return item
                    }
                })

            }
        default: return state
    }
}