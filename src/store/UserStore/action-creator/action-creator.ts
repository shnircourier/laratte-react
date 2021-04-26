import { Dispatch } from "redux";
import UserInterface from "../../../interfaces/UserInterface";
import UserActionTypes from "../constants/UserActionTypes"
import UserAction from "../interfaces/UserAction";



export const initUsers = () => {
   return async (dispatch: Dispatch<UserAction>) => {
      try {
         dispatch({ type: UserActionTypes.INIT_USERS });
         const response: UserInterface[] = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
         dispatch({ type: UserActionTypes.INIT_USERS_COMPLETED, payload: response });
      } catch (error) {
         dispatch({ type: UserActionTypes.INIT_USERS_FAILED, payload: "Ошибка загрузки пользователей" });
      }
   }
}