import { useRecoilState } from 'recoil';
import { userAtom } from '../atoms/userAtom';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AppBar = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/signin');
    toast.error('Logged out');
  };
  return (
    <div className='flex items-center justify-between px-4 shadow h-14'>
      <div>
        <h1 className='text-3xl font-bold'>PayTM</h1>
      </div>
      <div className='flex items-center justify-around gap-2'>
        <h1>
          Hello, <span className='font-bold'>{user.firstName}</span>{' '}
        </h1>
        <div className='mr-4'>
          <Button label='Logout' onClick={handleLogout} />
        </div>
      </div>
    </div>
  );
};

export default AppBar;
