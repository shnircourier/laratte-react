import UserInterface from "../../../interfaces/UserInterface";




export default interface UserState {
   users: UserInterface[],
   loading: boolean,
   error: null | string
}