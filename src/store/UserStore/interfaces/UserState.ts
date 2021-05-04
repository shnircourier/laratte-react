import UserInterface from "../../../interfaces/api/UserInterface";




export default interface UserState {
   users: UserInterface[],
   loading: boolean,
   error: null | string
}