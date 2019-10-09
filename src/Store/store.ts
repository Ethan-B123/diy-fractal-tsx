import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { rootReducer } from './rootReducer';
import makePreloadedState from './PreloadedState';
import { AppState } from './rootReducer';
import { ActionType } from './Types';
import thunk, { ThunkMiddleware } from 'redux-thunk';

export default () => {
	const store = createStore(
		rootReducer,
		makePreloadedState(),
		applyMiddleware(thunk as ThunkMiddleware<AppState, ActionType>, logger)
	);
	return store;
};

export type AppState = AppState;
