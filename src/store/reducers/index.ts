import { IUser, usersReducer } from './users.reducer';
import { combineReducers } from 'redux';
import { searchReducer } from './search.reducer';

export interface IRootState {
    search: string;
    users: IUser[];
}

export const rootReducers = combineReducers({
    search: searchReducer,
    users: usersReducer
});
