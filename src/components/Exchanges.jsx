import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetTickersQuery } from '../services/cryptoTickersApi';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {

    const { data, isFetching } = useGetTickersQuery();
    const exchangeTicker = data?.data?.tickers;
    if (isFetching) return 'This page is under construction...';

    return (
        <>
            <Row>
                <Col span={6}>Exchanges</Col>
                <Col span={6}>24h Volume</Col>
                <Col span={6}>24h Change</Col>
                <Col span={6}>7d Change</Col>
            </Row>
            {exchangeTicker.map((tickers) => (
                <Row key={tickers.id}>
                    <Col span={6}>
                        <Text><strong>{tickers.name}</strong></Text>
                        <Text><strong>{tickers.symbol}</strong></Text>
                    </Col>
                    <Col span={6}>
                        {millify(tickers.volume24a)}
                    </Col>
                </Row>
            ))}
        </>
    )
}

export default Exchanges