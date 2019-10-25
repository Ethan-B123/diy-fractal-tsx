import React from 'react';
import './App.css';
import SourcePointIndex from '../Form/SourcePointIndex';
import FractalPointIndex from '../Form/FractalPointIndex';
import { SavesContainer } from '../Form/Saves';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) => {
	console.log(theme.palette.primary.main);
	return createStyles({
		container: {
			backgroundColor: theme.palette.primary.main
		}
	});
});

const App: React.FC = () => {
	const classes = useStyles();

	return (
		<div className="App">
				<div className={classes.container}>
					<div className="app-nav-header">
						<h1>Fractal Canvas</h1>
						<p>
							{/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum. */}
							This project allows you to create your own fractals. You can create shapes on the canvas and then pick areas to repeatedly print the canvas back onto itself, resulting in fractal patterns. <br/><br/>
							You can use the "source points" menu to build the source image, and the "fractal points" to decide how you want the image to repeat onto itself.<br/><br/>
						</p>
					</div>
					<SavesContainer />
					<SourcePointIndex />
					<FractalPointIndex />
				</div>
		</div>
	);
};

export default App;
