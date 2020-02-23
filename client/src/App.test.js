import React from 'react';
import ReactDOM from 'react-dom';
import {fireEvent, render} from '@testing-library/react';
import App from './App';
import FetchPlayers from "./components/FetchPlayers";
import {dark} from "@material-ui/core/styles/createPalette";
import {FormControlLabel} from "@material-ui/core";


test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders to content to DOM', () => {
   render(<FetchPlayers/>);

});

test('display correct toggle state', () => {
    const {getByLabelText, getByTestId} = render(<App />);
    const checked = getByLabelText("LightMode");
    const toggleState = getByTestId("toggle-control");
    expect(checked.value).toBe("");
    expect(toggleState.textContent).toBe("Mode");
    fireEvent.change(toggleState);

});
