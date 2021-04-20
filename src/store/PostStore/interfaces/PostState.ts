import PostInterface from "../../../interfaces/PostInterface";


export default interface PostState {
   users: PostInterface[],
   loading: boolean,
   error: null | string
}