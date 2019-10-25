import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';
import FractalCanvas from './FractalCanvas/FractalCanvas';
import createStore from './Store/store';
import { Provider } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { AppState, ActionType } from './Store/Types';
import { LoadSave } from './Store/Saves/actions';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

// Return, State, Extra_arg, Action

type ThunkResult<R> = ThunkAction<R, AppState, void, ActionType>;

const theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: { main: '#212121' },
		secondary: { main: '#0D47A1' }
	}
});

document.addEventListener('DOMContentLoaded', () => {
	const HTMLFractalCanvas = document.getElementById(
		'fractal-canvas'
	) as HTMLCanvasElement;
	const HTMLSourceCanvas = document.getElementById(
		'input-canvas'
	) as HTMLCanvasElement;
	const store = createStore();
	const fractalCanvas = new FractalCanvas(HTMLFractalCanvas, HTMLSourceCanvas);

	store.dispatch(LoadSave(store.getState().saves.current.name));

	function p() {
		const state = store.getState();
		const joined = {
			...state
		};
		delete joined.saves;
		console.log(JSON.stringify(joined));
	}
	//@ts-ignore
	window.store = store;
	//@ts-ignore
	window.p = p;

	fractalCanvas.receiveUpdates(store.getState());
	store.subscribe(() => {
		fractalCanvas.receiveUpdates(store.getState());
	});

	ReactDOM.render(
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</Provider>,
		document.getElementById('react-root')
	);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
