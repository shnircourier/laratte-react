import PostInterface from "../../../interfaces/PostInterface";


export default interface PostState {
   posts: PostInterface[],
   loading: boolean,
   error: null | string
}