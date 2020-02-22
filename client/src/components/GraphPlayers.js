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


                        <BarChart width={730} height={250} data={graph}>
                            <CartesianGrid strokeDashArray="3 3"/>
                            {/*<XAxis dataKey={graph.country}/>*/}
                            <YAxis dataKey={graph.country}/>
                            <Tooltip/>
                            <Legend verticalAlign="top" height={36}/>
                            <Bar name="country" dataKey={graph.country} fill="#8884d8"/>
                            <Bar name="searches" dataKey={graph.searches} fill="#82ca9d"/>
                        </BarChart>
                    ))}
                </div>
            </>
        );
    }
}

export default GraphPlayers;