import PhotoInterface from "../../../interfaces/api/PhotoInterface";


export default interface PhotoState {
   photos: PhotoInterface[],
   loading: boolean,
   error: null | string
}