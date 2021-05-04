import { Dispatch } from "redux"
import PhotoInterface from "../../../interfaces/api/PhotoInterface"
import PhotoActionTypes from "../constants/PhotoActionTypes"
import PhotoAction from "../interfaces/PhotoAction"


export const initPhotos = () => {
   return async (dispatch: Dispatch<PhotoAction>) => {
      try {
         dispatch({ type: PhotoActionTypes.INIT_PHOTOS });
         const response = await fetch('https://jsonplaceholder.typicode.com/photos');
         if (!response.ok) throw new Error();
         const body: PhotoInterface[] = await response.json();
         dispatch({ type: PhotoActionTypes.INIT_PHOTOS_COMPLETED, payload: body });
      } catch (error) {
         dispatch({ type: PhotoActionTypes.INIT_PHOTOS_FAILED, payload: "Что-то пошло не так" });
      }
   }
}