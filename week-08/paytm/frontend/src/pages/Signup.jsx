import axios from 'axios';
import Button from '../components/Button';
import Heading from '../components/Heading';
import InputBox from '../components/InputBox';
import SubHeading from '../components/SubHeading';
import BottomWarning from '../components/BottomWarning';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userAtom } from '../atoms/userAtom';
import toast from 'react-hot-toast';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userAtom);

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5001/api/v1/user/signup',
        { username, firstName, lastName, password }
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
          <Heading label={'Sign up'} />
          <SubHeading label={'Enter your details to create an account'} />
          <InputBox
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder='John'
            label={'First Name'}
          />
          <InputBox
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder='Doe'
            label={'Last Name'}
          />
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
            <Button onClick={handleSignup} label={'Sign up'} />
          </div>
          <BottomWarning
            label={'Already have an account?'}
            message={'Sign in'}
            to={'/signin'}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
