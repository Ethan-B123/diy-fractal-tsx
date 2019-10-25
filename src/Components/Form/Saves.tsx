import React, { FC, useEffect, useState, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState, ActionType } from '../../Store/Types';
import { LoadSave, SaveSave } from '../../Store/Saves/actions';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = ReturnType<typeof MDTP>;

type SavesComponentProps = {
	[S in keyof StateProps]: StateProps[S];
} &
	{
		[D in keyof DispatchProps]: DispatchProps[D];
	};

const onLoadChange = (props: SavesComponentProps) => (
	e: ChangeEvent<{ value: unknown }>
) => {
	props.load(e.target.value as string);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			backgroundColor: theme.palette.primary.main,
			marginTop: theme.spacing(2),
			marginBottom: theme.spacing(2),
			'&:hover': {
				backgroundColor: theme.palette.primary.dark
			},
			gridTemplate:
				'"saves-text saves-submit" auto "saves-select saves-select" auto / 1fr 1fr',
			display: 'grid'
		},
		nav: {
			backgroundColor: theme.palette.primary.dark,
			zIndex: 2,
			position: 'sticky',
			top: 0,
			padding: theme.spacing(1),
			display: 'grid',
			gridTemplateAreas: '"navTitle navTitle" "navBtn navSelect"',
			gridTemplateColumns: '1fr 1fr'
		},
		textField: {
			margin: theme.spacing(0.5),
			gridArea: 'saves-text'
		},
		button: {
			margin: theme.spacing(0.5),
			gridArea: 'saves-submit'
		},
		select: {
			margin: theme.spacing(0.5),
			gridArea: 'saves-select'
		}
	})
);

const SavesComponent: FC<SavesComponentProps> = function(props) {
	const [saveInputText, setSaveInputText] = useState('');

	useEffect(() => {
		setSaveInputText(props.name + ' copy');
	}, [props.name]);
	const saveNames: string[] = Object.keys(props.others);

	const inputLabel = React.useRef<HTMLLabelElement>(null);
	const [labelWidth, setLabelWidth] = React.useState(0);
	React.useEffect(() => {
		setLabelWidth(inputLabel.current!.offsetWidth);
	}, []);

	const classes = useStyles();

	return (
		<div>
			<div className={classes.nav}>
				<h3>Saves</h3>
			</div>

			<div className={classes.container}>
				<TextField
					label="Save As"
					className={classes.textField}
					type="text"
					margin="dense"
					variant="outlined"
					onChange={e => setSaveInputText(e.target.value)}
					value={saveInputText}
				/>

				<Button
					variant="contained"
					size="small"
					className={classes.button}
					onClick={() => {
						props.save(saveInputText);
					}}
				>
					Save
				</Button>
				<FormControl variant="outlined" className={classes.select}>
					<InputLabel ref={inputLabel} htmlFor={`load-select`}>
						Load
					</InputLabel>
					<Select
						native
						onChange={onLoadChange(props)}
						labelWidth={labelWidth}
						value={props.name}
						margin="dense"
						inputProps={{ id: `load-select` }}
					>
						{saveNames.map(name => (
							<option key={name} value={name}>
								{name}
							</option>
						))}
					</Select>
				</FormControl>
			</div>
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
