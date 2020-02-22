import React from 'react';
import './App.scss'
import {AppBar, Typography, FormControlLabel, Switch, FormGroup} from "@material-ui/core";


export default function App() {

    //inline the useState for darkMode
    const [darkMode, setDarkMode] = React.useState(false);
    const handleChange = (ev) => {
        setDarkMode(ev.target.checked);
        const element = document.body;
        element.classList.toggle("Dark-mode")
    };

    return (
        <>

            <AppBar className='App'>
                <FormGroup>
                    <FormControlLabel className='Form-label'
                                      control={<Switch checked={darkMode} onChange={handleChange}
                                                       arial-label="toggle switch"/>}
                                      label={darkMode ? 'LightMode' : 'DarkMode'}
                    />
                </FormGroup>
            </AppBar>
        </>
    )

}
