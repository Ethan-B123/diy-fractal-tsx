import { FractalPointsState } from '../FractalPoints/Types';
import { SourcePointsState } from '../SourcePoints/Types';
import { AppState } from '../Types';

export const LOAD_SAVE = 'LOAD_SAVE';
export const SAVE_SAVE = 'SAVE_SAVE';

export interface LoadSaveAction {
	type: typeof LOAD_SAVE;
	fullState: AppState;
	name: string;
}

export interface SaveSaveAction {
	type: typeof SAVE_SAVE;
	fullState: AppState;
	name: string;
}

export type SavesAction = LoadSaveAction | SaveSaveAction;

export type SavesState = {
	current: {
		name: string;
	};
	others: {
		[name: string]: {
			fractalPoints: FractalPointsState;
			sourcePoints: SourcePointsState;
		};
	};
};
