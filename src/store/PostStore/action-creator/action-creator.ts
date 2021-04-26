import { Dispatch } from "redux"
import PostInterface from "../../../interfaces/PostInterface"
import PostActionTypes from "../constants/PostActionTypes"
import PostAction from "../interfaces/PostAction"


export const initPosts = () => {
   return async (dispatch: Dispatch<PostAction>) => {
      try {
         dispatch({ type: PostActionTypes.INIT_POSTS });
         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
         if (!response.ok) throw new Error();
         const body: PostInterface[] = await response.json();
         dispatch({ type: PostActionTypes.INIT_POSTS_COMPLETED, payload: body });
      } catch (error) {
         dispatch({ type: PostActionTypes.INIT_POSTS_FAILED, payload: "Что-то пошло не так" });
      }
   }
}