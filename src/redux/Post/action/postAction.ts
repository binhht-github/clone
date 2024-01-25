
import { getPostForYou } from '../../../api/post';
import { FEACTH_POST } from '../reducer/postReducer';

export const feacthPosts = () => async dispatch =>{
    try {
            const result = await getPostForYou();
        
            // console.log(result.data);
            
        dispatch({
            type:FEACTH_POST,
            data:result.data
        })
    } catch (error) {
        
    }
}