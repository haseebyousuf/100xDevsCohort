import axios from 'axios';
import BottomWarning from '../components/BottomWarning';
import Button from '../components/Button';
import Heading from '../components/Heading';
import InputBox from '../components/InputBox';
import SubHeading from '../components/SubHeading';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { userAtom } from '../atoms/userAtom';
import toast from 'react-hot-toast';

const Signin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const setUser = useSetRecoilState(userAtom);

  const handleSignin = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5001/api/v1/user/signin',
        { username, password }
      );
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/dashboard');
      setUser(response.data?.user);
      toast.success('Logged In Successfully');
    } catch (error) {
      toast.error(error?.response?.data?.message || 'There is some error');
    }
  };
  return (
    <div className='flex justify-center h-screen bg-slate-300'>
      <div className='flex flex-col justify-center'>
        <div className='p-2 px-4 text-center bg-white rounded-lg w-96 h-max'>
          <Heading label={'Sign in'} />
          <SubHeading label={'Enter your credentials to access your account'} />
          <InputBox
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder='john@gmail.com'
            label={'Email'}
            type='email'
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder='123456'
            label={'Password'}
            type='password'
          />
          <div className='pt-4'>
            <Button label={'Sign in'} onClick={handleSignin} />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            message={'Sign up'}
            to={'/signup'}
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
