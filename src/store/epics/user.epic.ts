import { ActionsObservable, ofType } from 'redux-observable';
import { AnyAction } from 'redux';
import { getUsersSuccess, UsersAction } from '../actions/user.action';
import { catchError, map, switchMap } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs';
import { getUser } from '../../services/user.service';
import { AxiosResponse } from 'axios';
import { IUser } from '../reducers/users.reducer';


export const usersEpic = (actions$: ActionsObservable<AnyAction>) =>
    actions$
        .pipe(
            ofType(UsersAction.GET_USERS_PENDING),
            switchMap(() => {
                return (from(getUser()
                    .then((res: AxiosResponse<IUser[]>) => res.data)) as Observable<IUser[]>)
                    .pipe(
                        map((users: IUser[]) => getUsersSuccess(users)),
                        catchError((_err) => of({type: 'Error'}))
                    );
            })
        ) as Observable<AnyAction>;
