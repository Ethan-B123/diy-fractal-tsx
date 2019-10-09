import { AppState, ActionType } from '../Types';
import { ThunkAction } from 'redux-thunk';
import { SAVE_SAVE, SaveSaveAction, LOAD_SAVE, LoadSaveAction } from './Types';

type ThunkResult = ThunkAction<void, AppState, void, ActionType>;

function SaveSaveNotThunk(name: string, fullState: AppState): SaveSaveAction {
	return {
		name,
		fullState,
		type: SAVE_SAVE
	};
}

function LoadSaveNotThunk(name: string, fullState: AppState): LoadSaveAction {
	return {
		name,
		fullState,
		type: LOAD_SAVE
	};
}

export function SaveSave(name: string): ThunkResult {
	return function(dispatch, getState) {
		const state = getState();
		dispatch(SaveSaveNotThunk(name, state));
	};
}

export function LoadSave(name: string): ThunkResult {
	return function(dispatch, getState) {
		const state = getState();
		dispatch(LoadSaveNotThunk(name, state));
	};
}
