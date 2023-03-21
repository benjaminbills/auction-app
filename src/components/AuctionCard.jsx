import React from 'react';

const AuctionCard = ({ item }) => {
  const extractInitials = (fullName) => {
    const names = fullName.split(' ');
    const firstName = names[0];
    const lastName = names[names.length - 1];
    const initials = firstName[0] + lastName[0];
    return initials;
  };
  return (
    <div className='border min-w-[293.5px] h-[353px] border-1 border-gray-300 rounded-xl p-[12px] flex flex-col'>
      <div>
        <img
          className='max-h-[150px] sm:max-h-[132px] w-full'
          src={item.image}
          alt={item.title}
        />
      </div>
      <div className='mt-3'>
        <div className='border-b pb-[8px] '>
          <div className='flex items-center '>
            <span className='bg-gray-100 h-[32px] w-[32px] rounded-full text-sm font-medium inline-flex items-center justify-center text-gray-600'>
              {extractInitials(item.name)}
            </span>
            <p className='pl-[8px] text-[#101828] font-semibold text-xs '>
              {item.name}
              <span className='text-[#98A2B3] font-normal'>
                {' '}
                (Highest Bidder)
              </span>
            </p>
          </div>
          <p className='font-semibold text-sm pt-[19px] leading-5 text-gray-900'>
            {item.title}
          </p>
          <p className=' text-sm text-gray-400 font-normal pt-[8px]'>
            Current Bid:{' '}
            <span className='font-semibold text-gray-700'>{item.bid}</span>
          </p>
        </div>
      </div>
      <button className='bg-[#004CCC] w-full h-[40px] text-white rounded-lg mt-auto '>
        Add to wishlist
      </button>
    </div>
  );
};

export default AuctionCard;
