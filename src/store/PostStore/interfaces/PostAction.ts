import {
   InitPosts,
   InitPostsCompleted,
   InitPostsFailed
} from './action/action';


export type PostAction = InitPosts | InitPostsCompleted | InitPostsFailed;

export default PostAction;