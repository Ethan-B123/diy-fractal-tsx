import {
	ADD_FRACTAL_POINT,
	EDIT_FRACTAL_POINT,
	REMOVE_FRACTAL_POINT,
	SET_GCO,
	SET_ITER_DELAY,
	FractalPointsState
} from './Types';
import {
	ADD_SOURCE_POINT,
	EDIT_SOURCE_POINT,
	REMOVE_SOURCE_POINT
} from '../SourcePoints/Types';
import { ActionType } from '../Types';
import { FractalPoint } from '../../FractalCanvas/Types';
import { LOAD_SAVE } from '../Saves/Types';

const initialState: FractalPointsState = {
	points: [],
	maxId: 0,
	updateId: 0,
	globalCompositeOperation: 'source-over',
	iterationDelay: 0
};

export function FractalPointsReducer(
	state: FractalPointsState = initialState,
	action: ActionType
): FractalPointsState {
	let copy: FractalPointsState;
	let newPoint: FractalPoint;
	switch (action.type) {
		case ADD_FRACTAL_POINT:
			newPoint = JSON.parse(JSON.stringify(action.point));
			copy = JSON.parse(JSON.stringify(state));
			copy.updateId++;
			newPoint.id = ++copy.maxId;
			copy.points.push(newPoint);
			return copy;
		case EDIT_FRACTAL_POINT:
			newPoint = JSON.parse(JSON.stringify(action.point));
			copy = JSON.parse(JSON.stringify(state));
			copy.updateId++;
			for (let i = 0; i < copy.points.length; i++) {
				if (copy.points[i].id === newPoint.id) {
					copy.points[i] = newPoint;
					break;
				}
			}
			return copy;
		case REMOVE_FRACTAL_POINT:
			newPoint = JSON.parse(JSON.stringify(action.point));
			copy = JSON.parse(JSON.stringify(state));
			for (let i = 0; i < copy.points.length; i++) {
				if (copy.points[i].id === newPoint.id) {
					copy.points.splice(i, 1);
					break;
				}
			}
			copy.updateId++;
			return copy;
		case ADD_SOURCE_POINT:
			copy = JSON.parse(JSON.stringify(state));
			copy.updateId++;
			return copy;
		case EDIT_SOURCE_POINT:
			copy = JSON.parse(JSON.stringify(state));
			copy.updateId++;
			return copy;
		case REMOVE_SOURCE_POINT:
			copy = JSON.parse(JSON.stringify(state));
			copy.updateId++;
			return copy;
		case SET_GCO:
			copy = JSON.parse(JSON.stringify(state));
			copy.globalCompositeOperation = action.newGCO;
			copy.updateId++;
			return copy;
		case SET_ITER_DELAY:
			copy = JSON.parse(JSON.stringify(state));
			copy.iterationDelay = action.newDelay;
			return copy;
		case LOAD_SAVE:
			let fromSave: FractalPointsState;
			fromSave = JSON.parse(
				JSON.stringify(action.fullState.saves.others[action.name].fractalPoints)
			);
			fromSave.updateId = state.updateId + 1;
			return fromSave;
		default:
			return state;
	}
}
