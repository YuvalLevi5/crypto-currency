import React from 'react'
import { Layout, Typography, Space } from 'antd';
import Navbar from './components/Navbar';
import { HashRouter as Router, Redirect, Route, Switch, Routes, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExchangesPage from './pages/ExchangesPage';
import CryptocurrenciesPage from './pages/CryptocurrenciesPage';
import CryptoDetailsPage from './pages/CryptoDetailsPage';
import NewsPage from './pages/NewsPage';
import './app.css'


const App = () => {
    return (
        <Router>
            <div className='app'>
                <div className="navbar">
                    <Navbar />
                </div>
                <div className="main">
                    <Layout>
                        <div className="routes">
                            <Routes>
                                <Route excat path='' element={<HomePage />} />
                                <Route excat path='/exchanges' element={<ExchangesPage />} />
                                <Route excat path='/cryptocurrencies' element={<CryptocurrenciesPage />} />
                                <Route excat path='/crypto/:coinId' element={<CryptoDetailsPage />} />
                                <Route excat path='/news' element={<NewsPage />} />
                            </Routes>
                        </div>
                    </Layout>
                    <div className="footer"  >
                        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                            Cryptoverse <br />
                            All rights reserved
                        </Typography.Title>
                        <Space>
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/cryptocurrencies'>Cryptocurrencies</NavLink>
                            <NavLink to='/news'>News</NavLink>
                        </Space>
                    </div>
                </div>

            </div>
        </Router>
    )
}

export default App