import React, { ChangeEvent, useState, useEffect } from 'react';
import { FractalPoint } from '../../FractalCanvas/Types';
import { FractalPointActionTypes } from '../../Store/FractalPoints/Types';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

interface FractalPointIndexItemProps {
	point: FractalPoint;
	editPoint: (point: FractalPoint) => FractalPointActionTypes;
	removePoint: (point: FractalPoint) => FractalPointActionTypes;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			backgroundColor: theme.palette.primary.main,
			marginTop: theme.spacing(2),
			marginBottom: theme.spacing(2),
			'&:hover': {
				backgroundColor: theme.palette.primary.dark
			}
		},
		textField: {
			margin: theme.spacing(0.5)
		}
	})
);

const onChangeInt = (
	props: FractalPointIndexItemProps,
	hookSetFn: React.Dispatch<React.SetStateAction<string>>,
	changeVal: 'x' | 'y' | 'w' | 'h' | 'iters'
) => (e: ChangeEvent<HTMLInputElement>) => {
	const val = e.currentTarget.value;
	const copy = JSON.parse(JSON.stringify(props.point)) as FractalPoint;
	if (val === '') {
		hookSetFn(val);
	} else if (!isNaN(parseInt(val))) {
		hookSetFn(val);
		copy[changeVal] = parseInt(val);
		props.editPoint(copy);
	}
};

const onRemove = (props: FractalPointIndexItemProps) => () => {
	props.removePoint(props.point);
};

export const FractalPointIndexItem: React.FC<FractalPointIndexItemProps> = (
	props: FractalPointIndexItemProps
) => {
	const classes = useStyles();
	const [x, set_x] = useState(props.point.x.toString());
	const [y, set_y] = useState(props.point.y.toString());
	const [w, set_w] = useState(props.point.w.toString());
	const [h, set_h] = useState(props.point.h.toString());
	const [iters, set_iters] = useState(props.point.iters.toString());

	useEffect(() => {
		set_x(props.point.x.toString());
		set_y(props.point.y.toString());
		set_w(props.point.w.toString());
		set_h(props.point.h.toString());
		set_iters(props.point.iters.toString());
	}, [props.point]);

	return (
		<div className={`point-index-item ${classes.container}`}>
			<TextField
				label="X"
				className={classes.textField}
				type="number"
				margin="dense"
				variant="outlined"
				onChange={onChangeInt(props, set_x, 'x')}
				value={x}
			/>
			<TextField
				label="Y"
				className={classes.textField}
				type="number"
				margin="dense"
				variant="outlined"
				onChange={onChangeInt(props, set_y, 'y')}
				value={y}
			/>
			<TextField
				label="W"
				className={classes.textField}
				type="number"
				margin="dense"
				variant="outlined"
				onChange={onChangeInt(props, set_w, 'w')}
				value={w}
			/>
			<TextField
				label="H"
				className={classes.textField}
				type="number"
				margin="dense"
				variant="outlined"
				onChange={onChangeInt(props, set_h, 'h')}
				value={h}
			/>
			<TextField
				label="iterations"
				className={classes.textField}
				type="number"
				margin="dense"
				variant="outlined"
				onChange={onChangeInt(props, set_iters, 'iters')}
				value={iters}
			/>
			<Button
				variant="contained"
				size="small"
				className={classes.textField}
				onClick={onRemove(props)}
			>
				Remove
			</Button>
		</div>
	);
};
