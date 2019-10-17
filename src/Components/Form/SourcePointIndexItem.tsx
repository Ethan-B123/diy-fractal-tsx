import React, { ChangeEvent, useState, useEffect } from 'react';
import { SourcePoint } from '../../FractalCanvas/Types';
import { SourcePointActionTypes } from '../../Store/SourcePoints/Types';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

interface SourcePointIndexItemProps {
	point: SourcePoint;
	editPoint: (point: SourcePoint) => SourcePointActionTypes;
	removePoint: (point: SourcePoint) => SourcePointActionTypes;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			backgroundColor: theme.palette.primary.main,
			marginTop: theme.spacing(2),
			marginBottom: theme.spacing(2),
			'&:hover': {
				backgroundColor: theme.palette.primary.dark
			},
			gridTemplateAreas: '"sp_s sp_s" "sp_x sp_y" "sp_w sp_h" "sp_c sp_r"'
		},
		textField: {
			margin: theme.spacing(0.5)
		},
		remove: {
			gridArea: 'sp_r',
			margin: theme.spacing(0.5)
		},
		color: {
			gridArea: 'sp_c'
		},
		shape: {
			gridArea: 'sp_s'
		}
	})
);

const onChangeInt = (
	props: SourcePointIndexItemProps,
	hookSetFn: React.Dispatch<React.SetStateAction<string>>,
	changeVal: 'x' | 'y' | 'w' | 'h'
) => (e: ChangeEvent<HTMLInputElement>) => {
	const val = e.currentTarget.value;
	const copy = JSON.parse(JSON.stringify(props.point)) as SourcePoint;
	if (val === '') {
		hookSetFn(val);
	} else if (!isNaN(parseInt(val))) {
		hookSetFn(val);
		copy[changeVal] = parseInt(val);
		props.editPoint(copy);
	}
};

const onColorChange = (props: SourcePointIndexItemProps) => (
	e: ChangeEvent<HTMLInputElement>
) => {
	const val = e.currentTarget.value;
	const copy = JSON.parse(JSON.stringify(props.point)) as SourcePoint;
	copy.color = val;
	props.editPoint(copy);
};

const onTypeChange = (props: SourcePointIndexItemProps) => (
	e: ChangeEvent<{ value: unknown }>
) => {
	const val: 'Box' | 'Circle' = e.currentTarget.value as 'Box' | 'Circle';
	const copy = JSON.parse(JSON.stringify(props.point)) as SourcePoint;
	copy.type = val;
	props.editPoint(copy);
};

const onRemove = (props: SourcePointIndexItemProps) => () => {
	props.removePoint(props.point);
};

export const SourcePointIndexItem: React.FC<SourcePointIndexItemProps> = (
	props: SourcePointIndexItemProps
) => {
	const classes = useStyles();
	const [x, set_x] = useState(props.point.x.toString());
	const [y, set_y] = useState(props.point.y.toString());
	const [w, set_w] = useState(props.point.w.toString());
	const [h, set_h] = useState(props.point.h.toString());

	const inputLabel = React.useRef<HTMLLabelElement>(null);
	const [labelWidth, setLabelWidth] = React.useState(0);
	React.useEffect(() => {
		setLabelWidth(inputLabel.current!.offsetWidth);
	}, []);

	useEffect(() => {
		set_x(props.point.x.toString());
		set_y(props.point.y.toString());
		set_w(props.point.w.toString());
		set_h(props.point.h.toString());
	}, [props.point]);

	return (
		<div className={`point-index-item ${classes.container}`}>
			<FormControl variant="outlined" className={classes.shape}>
				<InputLabel ref={inputLabel} htmlFor={`shape-select-${props.point.id}`}>
					Shape
				</InputLabel>
				<Select
					native
					onChange={onTypeChange(props)}
					labelWidth={labelWidth}
					className={classes.textField}
					value={props.point.type}
					margin="dense"
					inputProps={{ id: `shape-select-${props.point.id}` }}
				>
					<option value="Circle">Circle</option>
					<option value="Box">Box</option>
				</Select>
			</FormControl>
			{/* <p>color:</p> */}
			{/* <input
				type="color"
				onChange={onColorChange(props)}
				value={props.point.color}
			/> */}
			<TextField
				label="Color"
				className={classes.textField}
				type="color"
				margin="dense"
				variant="outlined"
				onChange={onColorChange(props)}
				value={props.point.color}
			/>
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
			<Button
				variant="contained"
				size="small"
				className={classes.remove}
				onClick={onRemove(props)}
			>
				remove
			</Button>
		</div>
	);
};
