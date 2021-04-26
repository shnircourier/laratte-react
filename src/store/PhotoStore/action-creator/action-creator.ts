import { Dispatch } from "redux"
import PhotoInterface from "../../../interfaces/PhotoInterface"
import PhotoActionTypes from "../constants/PhotoActionTypes"
import PhotoAction from "../interfaces/PhotoAction"


export const initPhotos = () => {
   return async (dispatch: Dispatch<PhotoAction>) => {
      try {
         dispatch({ type: PhotoActionTypes.INIT_PHOTOS });
         const response: PhotoInterface[] = await (await fetch('https://jsonplaceholder.typicode.com/photos')).json();
         dispatch({ type: PhotoActionTypes.INIT_PHOTOS_COMPLETED, payload: response });
      } catch (error) {
         dispatch({ type: PhotoActionTypes.INIT_PHOTOS_FAILED, payload: "Что-то пошло не так" });
      }
   }
}