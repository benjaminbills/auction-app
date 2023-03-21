import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
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
    <div>
      <p>Featured Items</p>
      <div></div>
    </div>
  );
};

export default AuctionCardsList;
