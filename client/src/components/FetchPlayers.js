import React, {Component} from 'react';
import App from '../App';
import '../App.scss';
import GraphPlayers from "./GraphPlayers";

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
                <div className="dark-mode">
                    <GraphPlayers/>
                    {this.state.players.map((player) => (

                        <Card style={{
                            boxShadow: '3px 3px red, -1em 0 .4em green',
                            margin: '5%',
                            border: '1px solid',
                            width: '300px',
                            fontFamily: 'Noto Sans JP',
                            textAlign: 'center'
                        }} key={player.id}>
                            <h4>Name: {player.name}</h4>

                            <CardContent>
                                <Typography>
                                    <span>Country: {player.country} </span>


                                </Typography>
                                <Typography>
                                    <span>Searches: {player.searches} </span>

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