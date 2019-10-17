import React, { ChangeEvent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../Store/store';
import {
	FractalPointsState,
	FractalPointActionTypes,
	GCO_Value
} from '../../Store/FractalPoints/Types';
import {
	addPoint,
	editPoint,
	removePoint,
	setGCO,
	setIterDelay
} from '../../Store/FractalPoints/actions';
import { FractalPoint } from '../../FractalCanvas/Types';
import './IndexItem.css';
import './Index.css';
import { FractalPointIndexItem } from './FractalPointIndexItem';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

interface FractalPointIndexProps {
	fractalPoints: FractalPointsState;
	addFractalPoint: () => void;
	editFractalPoint: (point: FractalPoint) => FractalPointActionTypes;
	removeFractalPoint: (point: FractalPoint) => FractalPointActionTypes;
	setGCO: (newGCO: GCO_Value) => FractalPointActionTypes;
	setIterDelay: (newDelay: number) => FractalPointActionTypes;
}

const onTypeChange = (props: FractalPointIndexProps) => (
	e: ChangeEvent<{ value: unknown }>
) => {
	const val: GCO_Value = e.target.value as 'source-over' | 'destination-over';
	props.setGCO(val);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			backgroundColor: theme.palette.primary.main
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
		title: {
			margin: theme.spacing(0.5),
			gridArea: 'navTitle'
		},
		select: {
			margin: theme.spacing(0.5),
			gridArea: 'navSelect'
		},
		button: {
			margin: theme.spacing(0.5),
			gridArea: 'navBtn'
		}
	})
);

const FractalPointIndex: React.FC<FractalPointIndexProps> = (
	props: FractalPointIndexProps
) => {
	const inputLabel = React.useRef<HTMLLabelElement>(null);
	const [labelWidth, setLabelWidth] = React.useState(0);
	React.useEffect(() => {
		setLabelWidth(inputLabel.current!.offsetWidth);
	}, []);
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<div className={classes.nav}>
				<h3 className={classes.title}>Fractal Points</h3>
				{/* <button onClick={props.addFractalPoint}>Add</button> */}
				<Button
					variant="contained"
					size="small"
					className={classes.button}
					onClick={props.addFractalPoint}
				>
					Add Point
				</Button>
				{/* <button onClick={() => alert('not working yet')}>Randomize</button> */}
				<FormControl variant="outlined">
					<InputLabel ref={inputLabel} htmlFor="gca-select">
						Paint Fn
					</InputLabel>
					<Select
						native
						onChange={onTypeChange(props)}
						labelWidth={labelWidth}
						className={classes.select}
						value={props.fractalPoints.globalCompositeOperation}
						margin="dense"
						inputProps={{ id: 'gca-select' }}
					>
						<option value="source-over">Paint Over</option>
						<option value="destination-over">Paint Under</option>
					</Select>
				</FormControl>
			</div>
			{props.fractalPoints.points.map(point => (
				<FractalPointIndexItem
					key={point.id}
					point={point}
					editPoint={props.editFractalPoint}
					removePoint={props.removeFractalPoint}
				/>
			))}
		</div>
	);
};

const MSTP = (state: AppState) => ({
	fractalPoints: state.fractalPoints
});

const MDTP = (dispatch: Dispatch) => {
	const defaultFractalPoint: FractalPoint = {
		x: 175,
		y: 175,
		w: 350,
		h: 350,
		id: -1,
		iters: 5
	};
	return {
		addFractalPoint: () => dispatch(addPoint(defaultFractalPoint)),
		editFractalPoint: (point: FractalPoint) => dispatch(editPoint(point)),
		removeFractalPoint: (point: FractalPoint) => dispatch(removePoint(point)),
		setGCO: (newGCO: GCO_Value) => dispatch(setGCO(newGCO)),
		setIterDelay: (newDelay: number) => dispatch(setIterDelay(newDelay))
	};
};

const connected = connect(
	MSTP,
	MDTP
)(FractalPointIndex);

export default connected;
