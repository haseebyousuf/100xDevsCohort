/* eslint-disable react/prop-types */

import { useRecoilValue } from 'recoil';
import { userAtom } from '../atoms/userAtom';

const Balance = () => {
  const user = useRecoilValue(userAtom);
  return (
    <div className='flex'>
      <div className='text-lg font-bold'>Your balance</div>
      <div className='ml-4 text-lg font-semibold'>
        Rs {user.balance.toFixed(0)}
      </div>
    </div>
  );
};

export default Balance;
