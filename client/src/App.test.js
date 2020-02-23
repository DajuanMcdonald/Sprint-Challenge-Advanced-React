import React from 'react';
import ReactDOM from 'react-dom';
import {fireEvent, render} from '@testing-library/react';
import App from './App';
import FetchPlayers from "./components/FetchPlayers";
import GraphPlayers from "./components/GraphPlayers";

test('renders App to DOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders FetchPlayers to DOM', () => {
   render(<FetchPlayers/>);

});

test('renders GraphPlayers to DOM', () => {
    render(<GraphPlayers/>);
});



test('display correct toggle state', () => {
    const {getByLabelText, getByTestId} = render(<App />);

    const checked = getByLabelText("LightMode");
    const toggleState = getByTestId("toggle-control");

    expect(checked.value).toBe("");
    expect(toggleState.textContent).toBe("LightMode");
    fireEvent.change(toggleState);

});

// test('display labels on cards', () => {
//     const {getByText, getByTestId} = render(<FetchPlayers/>);
//     // const label = getByText("United States");
//     const textcontent = getByTestId("player-card");
//     // expect(label.textContent).toBe("United States");
//     expect(textcontent.textContent).toBe("Name:");
// });
