import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { CopyrightOutlined } from '@ant-design/icons';

// import Navbar from './components/Navbar';
import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from './components';
import './App.css';
import { SpaceContext } from 'antd/lib/space';

const App = () => {
    return (
        <div className="app">
            
            <div className="navbar">
                <Navbar />
            </div>

            <div className="main">
                <Layout>
                    <div className="routes">

                        <Routes>
                            <Route path="/" element={<Homepage />} />  
                            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                            <Route path="/exchanges" element={<Exchanges />} />
                            <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                            <Route path="/news" element={<News />} />
                        </Routes>
                        
                    </div>
                </Layout>

                <div className="footer">
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center'}}>
                        <CopyrightOutlined style={{ padding:'0 10px'}} /> 
                        All Things Crypto <br />
                        All rights reserved
                    </Typography.Title>
                    <Space>
                        <Link to="/">Homepage</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </div>

            </div>
        </div>
    )
}

export default App