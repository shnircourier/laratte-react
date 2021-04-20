import PostInterface from "../../../../interfaces/PostInterface";
import PostActionTypes from "../../constants/PostActionTypes";


export interface InitPosts {
   type: PostActionTypes.INIT_POSTS
}

export interface InitPostsCompleted {
   type: PostActionTypes.INIT_POSTS_COMPLETED,
   payload: PostInterface[]
}

export interface InitPostsFailed {
   type: PostActionTypes.INIT_POSTS_FAILED
   payload: string
}