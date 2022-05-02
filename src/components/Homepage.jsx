import React from 'react'
import milify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const Homepage = () => {
    return (
        <>
            <Title level={2} className="heading">Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic</Col>
            </Row>
        </>
    )
}

export default Homepage