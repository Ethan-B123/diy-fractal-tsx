import {
	ADD_SOURCE_POINT,
	EDIT_SOURCE_POINT,
	REMOVE_SOURCE_POINT,
	SourcePointsState
} from './Types';
import { LOAD_SAVE } from '../Saves/Types';
import { ActionType } from '../Types';
import { SourcePoint } from '../../FractalCanvas/Types';

const initialState: SourcePointsState = {
	points: [],
	maxId: 0
};

export function SourcePointsReducer(
	state: SourcePointsState = initialState,
	action: ActionType
): SourcePointsState {
	switch (action.type) {
		case ADD_SOURCE_POINT:
			const newPoint0 = JSON.parse(JSON.stringify(action.point)) as SourcePoint;
			const SPsCopy0 = JSON.parse(JSON.stringify(state)) as SourcePointsState;
			newPoint0.id = ++SPsCopy0.maxId;
			SPsCopy0.points.push(newPoint0);
			return SPsCopy0;
		case EDIT_SOURCE_POINT:
			const newPoint1 = JSON.parse(JSON.stringify(action.point)) as SourcePoint;
			const SPsCopy1 = JSON.parse(JSON.stringify(state)) as SourcePointsState;
			for (let i = 0; i < SPsCopy1.points.length; i++) {
				if (SPsCopy1.points[i].id === newPoint1.id) {
					SPsCopy1.points[i] = newPoint1;
					break;
				}
			}
			return SPsCopy1;
		case REMOVE_SOURCE_POINT:
			const removePoint2 = JSON.parse(
				JSON.stringify(action.point)
			) as SourcePoint;
			const SPsCopy2 = JSON.parse(JSON.stringify(state)) as SourcePointsState;
			for (let i = 0; i < SPsCopy2.points.length; i++) {
				if (SPsCopy2.points[i].id === removePoint2.id) {
					SPsCopy2.points.splice(i, 1);
					break;
				}
			}
			return SPsCopy2;
		case LOAD_SAVE:
			let fromSave: SourcePointsState;
			fromSave = JSON.parse(
				JSON.stringify(action.fullState.saves.others[action.name].sourcePoints)
			);
			return fromSave;
		default:
			return state;
	}
}
