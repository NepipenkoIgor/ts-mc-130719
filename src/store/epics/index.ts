import { combineEpics } from 'redux-observable';
import { usersEpic } from './user.epic';


export const rootEpics = combineEpics(usersEpic);
