import { GiHornedHelm } from 'react-icons/gi';

import { days, months } from '../utils';
const Header = () => {
  const date = new Date();
  return (
    <>
      <h1 className='text-5xl flex gap-2 items-center justify-center '>
        <GiHornedHelm />
        Powerlist
      </h1>
      <div className='flex justify-center mx-0 my-2'>
        <p className='px-[3px] text-lg font-bold'>{days[date.getDay()]}</p>
        <p className='px-[3px] text-lg font-bold'>{date.getDate()},</p>
        <p className='px-[3px] text-lg font-bold'>{months[date.getMonth()]}</p>
        <p className='px-[3px] text-lg font-bold'>{date.getFullYear()}</p>
      </div>
    </>
  );
};

export default Header;
