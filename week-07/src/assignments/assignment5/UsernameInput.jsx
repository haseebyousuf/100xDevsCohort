import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { userAtom } from './atoms';
const BASE_URL = 'https://api.github.com/users/';
const UsernameInput = () => {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const setUser = useSetRecoilState(userAtom);
  const handleGenerateCard = async () => {
    try {
      setIsLoading(true);

      const res = await fetch(`${BASE_URL}${username}`);
      const data = await res.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className='flex gap-2'>
      <input
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleGenerateCard();
          }
        }}
        value={username}
        className='w-64 p-4 border-2 border-black rounded-lg sm:w-96'
        type='text'
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Enter Your Github Username'
      />
      <button
        disabled={isLoading}
        onClick={handleGenerateCard}
        className='px-2 py-4 text-white rounded-lg cursor-pointer bg-slate-800 hover:bg-slate-700'
      >
        {isLoading ? 'Generating...' : 'Generate Card'}
      </button>
    </div>
  );
};

export default UsernameInput;
