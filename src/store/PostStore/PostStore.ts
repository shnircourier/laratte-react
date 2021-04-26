import PostActionTypes from "./constants/PostActionTypes"
import PostAction from "./interfaces/PostAction"
import PostState from "./interfaces/PostState"




const initialState: PostState = {
   posts: [],
   loading: false,
   error: null
}


export const postReducer = (state: PostState = initialState, action: PostAction): PostState => {
   switch (action.type) {
      case PostActionTypes.INIT_POSTS:
         return {
            posts: [],
            loading: true,
            error: null
         }
      case PostActionTypes.INIT_POSTS_FAILED:
         return {
            posts: [],
            loading: false,
            error: action.payload
         }
      case PostActionTypes.INIT_POSTS_COMPLETED:
         return {
            posts: action.payload,
            loading: false,
            error: null
         }
      default:
         return state;
   }
}

export default postReducer;