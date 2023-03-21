import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import AuctionCard from './AuctionCard';
const AuctionCardsList = () => {
  const { isLoading, data } = useQuery('auction-list', () => {
    return axios.get(
      'https://run.mocky.io/v3/7f02819f-8254-410a-b8af-ab98572bd26b'
    );
  });
  if (isLoading) {
    return <h2>Loading</h2>;
  }
  console.log(data);
  return (
    <div className='border-1 border rounded-xl p-2 sm:p-6 mt-6 shadow-lg'>
      <div className='flex justify-between items-center  pb-[24px]'>
        <p className='text-gray-900 text-lg font-semibold'>Featured Items</p>
        <button className='border border-1 border-gray-300 pt-[8px] pb-[8px] pl-[14px] pr-[14px] font-semibold text-sm text-gray-700 rounded-lg shadow-xs'>
          View Auction
        </button>
      </div>
      <hr className='pb-[24px]' />
      <div className='grid min-[1250px]:grid-cols-4 lg:grid-cols-3 gap-6 grid-cols-1 md:grid-cols-2 sm:grid-cols-2'>
        {data.data.data.map((item, i) => (
          <AuctionCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AuctionCardsList;
