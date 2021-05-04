import { Dispatch } from "redux";
import UserInterface from "../../../interfaces/api/UserInterface";
import UserActionTypes from "../constants/UserActionTypes"
import UserAction from "../interfaces/UserAction";



export const initUsers = () => {
   return async (dispatch: Dispatch<UserAction>) => {
      try {
         dispatch({ type: UserActionTypes.INIT_USERS });
         const response = await fetch('https://jsonplaceholder.typicode.com/users');
         if (!response.ok) throw new Error();
         const body: UserInterface[] = await response.json();
         dispatch({ type: UserActionTypes.INIT_USERS_COMPLETED, payload: body });
      } catch (e) {
         dispatch({ type: UserActionTypes.INIT_USERS_FAILED, payload: "Ошибка загрузки пользователей" });
      }
   }
}