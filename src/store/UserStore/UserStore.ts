import UserActionTypes from "./constants/UserActionTypes"
import UserAction from "./interfaces/UserAction"
import UserState from "./interfaces/UserState"


const initialState: UserState = {
   users: [],
   loading: false,
   error: null
}


export const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
   switch (action.type) {
      case UserActionTypes.INIT_USERS:
         return {
            users: [],
            loading: true,
            error: null
         }
      case UserActionTypes.INIT_USERS_FAILED:
         return {
            users: [],
            loading: false,
            error: action.payload
         }
      case UserActionTypes.INIT_USERS_COMPLETED:
         return {
            users: action.payload,
            loading: false,
            error: null
         }
      default:
         return state;
   }
}

export default userReducer;