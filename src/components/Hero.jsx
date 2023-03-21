import React from 'react';

const Hero = () => {
  return (
    <div className='bg-white w-full h-[332px] rounded-xl mt-[48px] border border-gray-200'>
      <div className='p-[24px]'>
        <div className='bg-[url("../public/images/image.svg")] h-[192px]  bg-cover bg-no-repeat rounded-xl'></div>
        <div className=''>
          <div className='absolute mt-[-52px] ml-[32px]'>
            <div className='bg-[url("../public/images/layer.jpeg")] h-[144px] w-[144px] bg-cover rounded-full  border-white border-4'></div>
          </div>
          <div className='ml-[200px] '>
            <div className='flex justify-between pt-3'>
              <div>
                <p className='font-semibold text-base '>
                  Starts in: 3 days : 2 hours : 24 minutes
                </p>
                <div className='flex flex-row pt-[8px]'>
                  <p className='inline-flex items-center bg-[#FFFAEB] rounded-2xl h-[28px] pr-[12px] pt-[4px] pb-[4px] text-[#B54708] font-medium'>
                    <span className='pr-[7px] pl-[11px]'>
                      <svg
                        width='8'
                        height='8'
                        viewBox='0 0 8 8'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle cx='4' cy='4' r='3' fill='#F79009' />
                      </svg>
                    </span>
                    Not live
                  </p>
                  <p className='ml-[8px] text-gray-600 text-base'>
                    Layers Auction
                  </p>
                </div>
              </div>
              <button className='inline-flex border-2 border-gray-300 rounded-md h-[36px] items-center pl-[14px] pr-[14px] pt-[8px] pb-[8px] font-semibold text-sm text-gray-700'>
                <span className='mr-[10px]'>
                  <svg
                    width='19'
                    height='20'
                    viewBox='0 0 19 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M5.83332 18.3333V9.16666M1.66666 10.8333V16.6667C1.66666 17.5871 2.41285 18.3333 3.33332 18.3333H14.5219C15.7558 18.3333 16.8052 17.433 16.9928 16.2135L17.8902 10.3801C18.1232 8.86574 16.9515 7.49999 15.4193 7.49999H12.5C12.0398 7.49999 11.6667 7.12689 11.6667 6.66666V3.72152C11.6667 2.58665 10.7467 1.66666 9.61179 1.66666C9.3411 1.66666 9.09581 1.82607 8.98587 2.07343L6.05327 8.67177C5.91952 8.97271 5.62109 9.16666 5.29176 9.16666H3.33332C2.41285 9.16666 1.66666 9.91285 1.66666 10.8333Z'
                      stroke='#344054'
                      strokeWidth='1.66667'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
                Accept Invite
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
