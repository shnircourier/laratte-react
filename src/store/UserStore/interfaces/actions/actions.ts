import UserInterface from "../../../../interfaces/api/UserInterface";
import UserActionTypes from "../../constants/UserActionTypes";

export interface InitUsers {
   type: UserActionTypes.INIT_USERS
}

export interface InitUsersCompleted {
   type: UserActionTypes.INIT_USERS_COMPLETED
   payload: UserInterface[]
}

export interface InitUsersFailed {
   type: UserActionTypes.INIT_USERS_FAILED
   payload: string
}