import { useRecoilValue } from 'recoil';
import UsernameInput from './UsernameInput';
import { userAtom } from './atoms';
import Card from './Card';

const GithubProfile = () => {
  const user = useRecoilValue(userAtom);
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen '>
      {user ? <Card user={user} /> : <UsernameInput />}
    </div>
  );
};

export default GithubProfile;
