import { useSetRecoilState } from 'recoil';
import { userAtom } from './atoms';

/* eslint-disable react/prop-types */
const Card = ({ user }) => {
  const setUser = useSetRecoilState(userAtom);

  return (
    <div>
      <div className='max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg w-80 sm:w-96 mt-28'>
        <div className='bg-[#00B2FF] p-4 h-36 flex items-center justify-center'>
          <div className='p-2 bg-white rounded-full'>
            <img
              src={user.avatar_url}
              alt='avatar'
              className='rounded-full'
              height={72}
              width={72}
            />
          </div>
        </div>
        <div className='p-4'>
          <h2 className='text-2xl font-semibold'>{user.name}</h2>
          <p>{user.bio}</p>

          <p className='text-sm text-gray-600'>{user.location}</p>
        </div>
        <div className='flex justify-around p-4 text-center border-t border-gray-300'>
          <div>
            <p className='text-lg font-semibold'>{user.followers}</p>
            <p className='text-sm text-gray-600'>Followers</p>
          </div>
          <div>
            <p className='text-lg font-semibold'>{user.following}</p>
            <p className='text-sm text-gray-600'>Following</p>
          </div>
          <div>
            <p className='text-lg font-semibold'>{user.public_repos}</p>
            <p className='text-sm text-gray-600'>Repos</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          setUser(null);
        }}
        className='w-full px-2 py-4 mt-4 text-white rounded-lg cursor-pointer bg-slate-800 hover:bg-slate-700'
      >
        Go Back
      </button>
    </div>
  );
};

export default Card;
