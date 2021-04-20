import {
   InitPhotos,
   InitPhotosCompleted,
   InitPhotosFailed
} from "./actions/actions";


export type PhotoAction = InitPhotos | InitPhotosCompleted | InitPhotosFailed;


export default PhotoAction;