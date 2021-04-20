import {
   InitUsers,
   InitUsersCompleted,
   InitUsersFailed
} from "./actions/actions";


export type UserAction = InitUsers | InitUsersCompleted | InitUsersFailed;


export default UserAction;