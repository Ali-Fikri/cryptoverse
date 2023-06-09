import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';

const { Title } = Typography;

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);

  if (isFetching) return 'Loading...';

  const globalData = data?.data?.stats;




  return (
    <>
      <Title level={2} className='heading'>Global Crypto Statistic</Title>
      <Row>
        <Col span={12}><Statistic title='Total Cryptocurrencies' value={globalData.total} /></Col>
        <Col span={12}><Statistic title='Total Exchanges' value={millify(globalData.totalExchanges)} /></Col>
        <Col span={12}><Statistic title='Total Market Cap' value={millify(globalData.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title='Total 24h volume' value={millify(globalData.total24hVolume)} /></Col>
        <Col span={12}><Statistic title='Total Markets' value={millify(globalData.totalMarkets)} /></Col>
      </Row>
      <section className='home-heading-container'>
        <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
        <Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show More</Link></Title>
      </section>
      <Cryptocurrencies simplified />
      <section className='home-heading-container'>
        <Title level={2} className='home-title'>Latest Crypto News</Title>
        <Title level={3} className='show-more'><Link to='/news'>Show More</Link></Title>
      </section>
      <News simplified />
    </>
  )
}

export default Home
