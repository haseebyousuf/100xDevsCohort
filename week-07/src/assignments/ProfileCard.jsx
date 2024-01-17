import avatar from '../assets/avatar.jpg';

const ProfileCard = () => {
  return (
    <div>
      <div className='max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg mt-28'>
        <div className='bg-[#00B2FF] p-4 h-36 flex items-center justify-center'>
          <div className='p-2 bg-white rounded-full'>
            <img
              src={avatar}
              alt='avatar'
              className='rounded-full'
              height={72}
              width={72}
            />
          </div>
        </div>
        <div className='p-4'>
          <h2 className='text-2xl font-semibold'>Haseeb Yousuf</h2>
          <p className='text-sm text-gray-600'>India</p>
        </div>
        <div className='flex justify-around p-4 text-center border-t border-gray-300'>
          <div>
            <p className='text-lg font-semibold'>80K</p>
            <p className='text-sm text-gray-600'>Followers</p>
          </div>
          <div>
            <p className='text-lg font-semibold'>803K</p>
            <p className='text-sm text-gray-600'>Likes</p>
          </div>
          <div>
            <p className='text-lg font-semibold'>1.4K</p>
            <p className='text-sm text-gray-600'>Photos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
