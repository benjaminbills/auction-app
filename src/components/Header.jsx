import React from 'react';
import Notification from './Notification';

const Header = () => {
  return (
    <div className='flex flex-col '>
      <div className='flex justify-between'>
        <p className='font-semibold text-[30px] text-gray-900'>Welcome</p>
        <Notification />
      </div>
      <p className='text-base font-normal text-gray-600'>
        Your current sales auction and activity.
      </p>
    </div>
  );
};

export default Header;
