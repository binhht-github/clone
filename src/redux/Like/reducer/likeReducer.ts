export const LIKE = 'LIKE'
export const UNLIKE = 'UNLIKE'

const initialState = []

export const likeReducer = (state = initialState, payload = {}) => {
    switch (payload.type) {
        case LIKE:
            {
                console.log('liked');

            }
        case UNLIKE:
            {
                console.log('un like');

            }
        default: return state
    }


}