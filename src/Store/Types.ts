import { SourcePointActionTypes } from './SourcePoints/Types';
import { FractalPointActionTypes } from './FractalPoints/Types';
import { SavesAction } from './Saves/Types';
import { AppState } from './store';

export type ActionType =
	| SourcePointActionTypes
	| FractalPointActionTypes
	| SavesAction;

export type AppState = AppState;
