import PostInterface from "../../../interfaces/api/PostInterface";


export default interface PostState {
   posts: PostInterface[],
   loading: boolean,
   error: null | string
}