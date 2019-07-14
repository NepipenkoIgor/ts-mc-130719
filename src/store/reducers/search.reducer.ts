import { AnyAction } from 'redux';
import { SEARCH } from '../actions/search.action';

const initialState: string = '';

export function searchReducer(state: string = initialState, action: AnyAction): string {
    switch (action.type) {
        case SEARCH: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
