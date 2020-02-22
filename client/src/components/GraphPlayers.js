import React, {Component} from 'react';
import axios from 'axios';

import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar
} from "recharts";
import {Toolbar} from "@material-ui/core";

class GraphPlayers extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/players')
            .then((res) => {
                this.setState({
                    data: res.data
                })
            })

    }

    render() {
        return (
            <>
                <div>
                    {this.state.data.map((graph) => (


                        <BarChart width={730} height={250} data={data}>
                            <CartesianGrid strokeDashArray="3 3"/>
                            <XAxis dataKey={graph.country}/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            <Bar/>
                        </BarChart>
                    ))}
                </div>
            </>
        );
    }
}

export default GraphPlayers;