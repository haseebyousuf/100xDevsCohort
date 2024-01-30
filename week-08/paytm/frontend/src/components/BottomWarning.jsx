/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const BottomWarning = ({ label, message, to }) => {
  return (
    <div className='py-2 text-sm flex justify-center'>
      <div>{label}</div>
      <Link className='pointer underline pl-1 cursor-pointer' to={to}>
        {message}
      </Link>
    </div>
  );
};

export default BottomWarning;
