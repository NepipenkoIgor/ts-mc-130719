import { AnyAction } from 'redux';
import { UsersAction } from '../actions/user.action';

export interface IUser {
    profileName: string;
    firstName: string;
    surname: string;
    photo: string;
    country: string;
}


const initialState: IUser[] = [];

export function usersReducer(state: IUser[] = initialState, actions: AnyAction): IUser[] {
    switch (actions.type) {
        case UsersAction.GET_USERS_SUCCESS: {
            return [...state, ...actions.payload];
        }
        default: {
            return state;
        }
    }
}
