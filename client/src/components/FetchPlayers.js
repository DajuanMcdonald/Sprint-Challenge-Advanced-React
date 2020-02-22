import React, {Component} from 'react';
import App from '../App';

import axios from 'axios';
import {Card, CardContent, Typography} from "@material-ui/core";



class FetchPlayers extends Component {
    constructor() {
        super();
        this.state = {
            players: []
        };


    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/players')
            .then((res) => {
                this.setState({
                    players: res.data
                })
            })

    }


    render() {
        return (
            <div>
                <App/>
                <div style={{backgroundColor: 'blue'}}>
                    {this.state.players.map((player) => (

                        <Card style={{
                            boxShadow: '3px 3px red, -1em 0 .4em green',
                            margin: '5%',
                            border: '1px solid',
                            width: '300px'
                        }} key={player.id}>
                            <h3>
                                {player.name}

                            </h3>
                            <CardContent>
                                <Typography>
                                    {player.country}

                                </Typography>
                                <Typography>

                                    {player.searches}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </div>

            </div>
        );
    }
}

export default FetchPlayers;