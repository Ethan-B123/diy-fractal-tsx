import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../Store/store';
import {
	SourcePointsState,
	SourcePointActionTypes
} from '../../Store/SourcePoints/Types';
import {
	addPoint,
	editPoint,
	removePoint
} from '../../Store/SourcePoints/Actions';
import { SourcePoint } from '../../FractalCanvas/Types';
import { SourcePointIndexItem } from './SourcePointIndexItem';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './IndexItem.css';
import './Index.css';

interface SourcePointIndexProps {
	sourcePoints: SourcePointsState;
	addSourcePoint: () => void;
	editSourcePoint: (point: SourcePoint) => SourcePointActionTypes;
	removeSourcePoint: (point: SourcePoint) => SourcePointActionTypes;
}

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
		button: {
			margin: theme.spacing(0.5),
			gridArea: 'navBtn'
		}
	})
);

const SourcePointIndex: React.FC<SourcePointIndexProps> = (
	props: SourcePointIndexProps
) => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<div className={classes.nav}>
				<h3 className={classes.title}>Source Points</h3>
				{/* <button onClick={props.addSourcePoint}>Add</button> */}

				<Button
					variant="contained"
					size="small"
					className={classes.button}
					onClick={props.addSourcePoint}
				>
					Add Point
				</Button>
				{/* <button onClick={() => alert('not working yet')}>Randomize</button> */}
			</div>
			{props.sourcePoints.points.map(point => (
				<SourcePointIndexItem
					key={point.id}
					point={point}
					editPoint={props.editSourcePoint}
					removePoint={props.removeSourcePoint}
				/>
			))}
		</div>
	);
};

const MSTP = (state: AppState) => ({
	sourcePoints: state.sourcePoints
});

const MDTP = (dispatch: Dispatch) => {
	const defaultSourcePoint: SourcePoint = {
		type: 'Box',
		color: '#ffffff',
		x: 350,
		y: 350,
		w: 30,
		h: 30,
		id: -1
	};
	return {
		addSourcePoint: () => dispatch(addPoint(defaultSourcePoint)),
		editSourcePoint: (point: SourcePoint) => dispatch(editPoint(point)),
		removeSourcePoint: (point: SourcePoint) => dispatch(removePoint(point))
	};
};

const connected = connect(
	MSTP,
	MDTP
)(SourcePointIndex);

export default connected;
