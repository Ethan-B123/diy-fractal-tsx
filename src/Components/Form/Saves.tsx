import React, { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState, ActionType } from '../../Store/Types';
import { LoadSave, SaveSave } from '../../Store/Saves/actions';

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = ReturnType<typeof MDTP>;

type SavesComponentProps = {
	[S in keyof StateProps]: StateProps[S];
} &
	{
		[D in keyof DispatchProps]: DispatchProps[D];
	};

const SavesComponent: FC<SavesComponentProps> = function(props) {
	const [saveInputText, setSaveInputText] = useState('');

	useEffect(() => {
		setSaveInputText(props.name + ' copy');
	}, [props.name]);
	const saveNames: string[] = Object.keys(props.others);

	return (
		<div>
			<input
				type="text"
				onChange={e => setSaveInputText(e.target.value)}
				placeholder="save"
				value={saveInputText}
			/>
			<button
				onClick={e => {
					props.save(saveInputText);
				}}
			>
				Save
			</button>
			<br />
			<select
				onChange={e => {
					props.load(e.target.value);
				}}
				value={props.name}
			>
				{saveNames.map(name => (
					<option key={name} value={name}>
						{name}
					</option>
				))}
			</select>
		</div>
	);
};

function MSTP(state: AppState) {
	return {
		name: state.saves.current.name,
		others: state.saves.others
	};
}

function MDTP(dispatch: ThunkDispatch<AppState, void, ActionType>) {
	return {
		save: (name: string) => dispatch(SaveSave(name)),
		load: (name: string) => dispatch(LoadSave(name))
	};
}

export const SavesContainer = connect(
	MSTP,
	MDTP
)(SavesComponent);
