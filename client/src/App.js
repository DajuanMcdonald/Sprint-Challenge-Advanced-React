import React from 'react';
import '../src/App.css'
import {AppBar, Typography, FormControlLabel, Switch, FormGroup} from "@material-ui/core";


export default function App() {

    //inline the useState for darkMode
    const [darkMode, setDarkMode] = React.useState(true);
    const handleChange = (ev) => {
        setDarkMode(ev.target.checked);
    };

    return (
        <>
            <AppBar className='App'>
                <Typography>Google World Cup: Womens</Typography>
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
