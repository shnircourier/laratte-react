import PhotoActionTypes from "./constants/PhotoActionTypes"
import PhotoAction from "./interfaces/PhotoAction"
import PhotoState from "./interfaces/PhotoState"



const initialState: PhotoState = {
   photos: [],
   loading: false,
   error: null
}


export const photoReducer = (state: PhotoState = initialState, action: PhotoAction): PhotoState => {
   switch (action.type) {
      case PhotoActionTypes.INIT_PHOTOS:
         return {
            photos: [],
            loading: true,
            error: null
         }
      case PhotoActionTypes.INIT_PHOTOS_FAILED:
         return {
            photos: [],
            loading: false,
            error: action.payload
         }
      case PhotoActionTypes.INIT_PHOTOS_COMPLETED:
         return {
            photos: action.payload,
            loading: false,
            error: null
         }
      default:
         return state;
   }
}

export default photoReducer;