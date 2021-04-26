import { Dispatch } from "redux"
import PostInterface from "../../../interfaces/PostInterface"
import PostActionTypes from "../constants/PostActionTypes"
import PostAction from "../interfaces/PostAction"


export const initPosts = () => {
   return async (dispatch: Dispatch<PostAction>) => {
      try {
         dispatch({ type: PostActionTypes.INIT_POSTS });
         const response: PostInterface[] = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
         dispatch({ type: PostActionTypes.INIT_POSTS_COMPLETED, payload: response });
      } catch (error) {
         dispatch({ type: PostActionTypes.INIT_POSTS_FAILED, payload: "Что-то пошло не так" });
      }
   }
}