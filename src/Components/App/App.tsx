import React from 'react';
import './App.css';
import SourcePointIndex from '../Form/SourcePointIndex';
import FractalPointIndex from '../Form/FractalPointIndex';
import { SavesContainer } from '../Form/Saves';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: { main: '#212121' },
		secondary: { main: '#0D47A1' }
	}
});

const App: React.FC = () => {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<div>
					<div className="app-nav-header">
						<h1>Fractal Canvas</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
					<SavesContainer />
					<SourcePointIndex />
					<FractalPointIndex />
				</div>
			</ThemeProvider>
		</div>
	);
};

export default App;
