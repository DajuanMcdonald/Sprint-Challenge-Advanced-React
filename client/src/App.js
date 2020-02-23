import React from 'react';

import './App.scss'
import {AppBar, FormControlLabel, Switch, FormGroup} from "@material-ui/core";


export default function App() {

    //inline the useState for darkMode
    const [darkMode, setDarkMode] = React.useState(false);
    const handleChange = (ev) => {
        setDarkMode(ev.target.checked);
        const element = document.body;
        element.classList.toggle("Dark-mode")
    };

    return (
        <div>

            <AppBar className='App'>
                <FormGroup>
                    <FormControlLabel
                        data-testid="toggle-control"
                        className='Form-label'
                        label={darkMode ? 'DarkMode' : 'LightMode'}
                        control={
                            <Switch
                                checked={darkMode}
                                onChange={handleChange}
                                arial-label="toggle-switch"
                            />
                        }
                    />
                </FormGroup>
            </AppBar>
        </div>
    )

}
