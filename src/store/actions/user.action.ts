import { IUser } from '../reducers/users.reducer';

export enum UsersAction {
    GET_USERS_PENDING = 'GET_USERS_PENDING',
    GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
}

export function getUsersPending() {
    return {
        type: UsersAction.GET_USERS_PENDING
    };
}

export function getUsersSuccess(payload: IUser[]) {
    return {
        type: UsersAction.GET_USERS_SUCCESS,
        payload
    };
}
