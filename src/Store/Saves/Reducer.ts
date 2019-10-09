import { FractalPointsState } from '../FractalPoints/Types';
import { SourcePointsState } from '../SourcePoints/Types';
import { SavesState, SavesAction, SAVE_SAVE, LOAD_SAVE } from './Types';

const defaultState: SavesState = {
	current: {
		name: ''
	},
	others: {}
};

export function SavesReducer(
	state: SavesState = defaultState,
	action: SavesAction
): SavesState {
	let copy: SavesState;
	switch (action.type) {
		case SAVE_SAVE:
			const fractalPoints: FractalPointsState = JSON.parse(
				JSON.stringify(action.fullState.fractalPoints)
			);
			const sourcePoints: SourcePointsState = JSON.parse(
				JSON.stringify(action.fullState.sourcePoints)
			);
			copy = JSON.parse(JSON.stringify(state));
			copy.others[action.name] = {
				fractalPoints,
				sourcePoints
			};
			copy.current.name = action.name;
			return copy;
		case LOAD_SAVE:
			copy = JSON.parse(JSON.stringify(state));
			copy.current.name = action.name;
			return copy;
		default:
			return state;
	}
}
