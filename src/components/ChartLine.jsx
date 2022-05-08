import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import {Chart as ChartJS} from 'chart.js/auto'

const { Title } = Typography;

const ChartLine = ({coinHistory, currentPrice, coinName}) => {
    const coinPrice = []
    const coinTimestamp = []

    const len =  coinHistory?.data?.history?.length
    const ylen =  coinHistory?.data?.history?.length

    for(let i = len-1;i>0;i--) {
        coinPrice.push(coinHistory?.data?.history[i].price)
    }
    for(let i = ylen-1;i>0;i--) {
        coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp*1000).toLocaleDateString("en-US"))
    }
    // This loop was working but not showing the correct dates in the xAxis of the chart
    // for(let i=0; i < coinHistory?.data?.history?.length;i+=1) {
    //     coinPrice.push(coinHistory?.data?.history[i]?.price)
    // }
    // for(let i=0; i < coinHistory?.data?.history?.length;i+=1) {
    //     coinTimestamp.push(new Date(coinHistory?.data?.history[i]?.timestamp).toLocaleDateString())
    // }

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price in USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd'
            }
        ]
    }

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    }

  return (
    <>
        <Row className="chart-header">
            <Title level={2} className="chart-title">{coinName} Price Chart</Title>
            <Col className="price-container">
                <Title level={5} className="price-change">{coinHistory?.data?.change}%</Title>
                <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
            </Col>
        </Row>
        <Line data={data} options={options} />
    </>
  )
};

export default ChartLine;
