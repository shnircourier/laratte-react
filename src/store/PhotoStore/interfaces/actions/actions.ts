import PhotoInterface from "../../../../interfaces/PhotoInterface";
import PhotoActionTypes from "../../constants/PhotoActionTypes";


export interface InitPhotos {
   type: PhotoActionTypes.INIT_PHOTOS
}

export interface InitPhotosCompleted {
   type: PhotoActionTypes.INIT_PHOTOS_COMPLETED
   payload: PhotoInterface[]
}

export interface InitPhotosFailed {
   type: PhotoActionTypes.INIT_PHOTOS_FAILED
   payload: string
}