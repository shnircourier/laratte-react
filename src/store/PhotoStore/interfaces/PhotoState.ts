import PhotoInterface from "../../../interfaces/PhotoInterface";


export default interface PhotoState {
   photos: PhotoInterface[],
   loading: boolean,
   error: null | string
}