import React, { Component } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import 'chartjs-plugin-annotation';

class Analytics extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            currentChoice: 'pie',
            barData: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            pieData: {
                datasets: [{
                    data: [10, 20, 30],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                }],

                // These labels appear in the legend and in the tooltips when hovering different arcs
                labels: [
                    'Red',
                    'Yellow',
                    'Blue'
                ]
            }
        }
    }

    // Changes to Pie Chart
    handleClickPie = () => {
        this.setState({
            currentChoice: 'pie'
        })
    }

    // Changes to Br Chart
    handleClickBar = () => {
        this.setState({
            currentChoice: 'bar'
        })
    }

    render() {
        const options = {
            annotation: {
                annotations: [{
                    drawTime: 'afterDatasetsDraw',
                    borderColor: 'red',
                    borderDash: [2, 2],
                    borderWidth: 2,
                    mode: 'vertical',
                    type: 'line',
                    value: 10,
                    scaleID: 'x-axis-0',
                }]
            },
            maintainAspectRation: false
        };

        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>Analytics</h1>
                    <button className='btn btn-primary m-2' onClick={this.handleClickPie}>Pie</button>
                    <button className='btn btn-primary m-2' onClick={this.handleClickBar}>Bar</button>
                    {this.state.currentChoice === 'bar' &&
                        <Bar
                            data={this.state.barData}
                            width={100}
                            height={50}
                            options={options}
                        />
                    }
                    {this.state.currentChoice === 'pie' &&
                        <Pie
                            data={this.state.pieData}
                        />
                    }
                </div>
            </div>
        )
    }
}

export default Analytics;
