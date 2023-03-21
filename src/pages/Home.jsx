import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AuctionCardsList from '../components/AuctionCardsList';

const Home = () => {
  return (
    <div>
      <Header />
      <hr className='mt-[20px]' />
      <Hero />
      <AuctionCardsList />
    </div>
  );
};

export default Home;
