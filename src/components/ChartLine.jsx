import { Typography } from "antd";
import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row } from "antd";

const { Title } = Typography; //Typography gets imported from the CryptoDetails component so here we only have to destructure the Title from it. No need to import it again.

const ChartLine = ({coinHistory, currentPrice, coinName}) => {
    const coinPrice = []
    const coinTimeStamp = []

    for(let i=0; i < coinHistory?.data?.history?.length;i++) {
        coinPrice.push(coinHistory.data.history[i].price)
        coinTimeStamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString())
    }

    const data = {
        labels: coinTimeStamp,
        datasets: [
            {
                label: asd,
            }
        ]
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
