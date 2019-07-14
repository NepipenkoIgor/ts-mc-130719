import { applyMiddleware, compose, createStore, Store } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { IRootState, rootReducers } from './reducers';
import { rootEpics } from './epics';

declare let __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (options: { name: string }) => typeof compose;
const rootEpicsMiddleware = createEpicMiddleware();
const composeEnhancers =
    typeof window === 'object' &&
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            name: 'TypeScript mc'
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(rootEpicsMiddleware)
);
export const store: Store<IRootState> = createStore(rootReducers, enhancer);
rootEpicsMiddleware.run(rootEpics);

