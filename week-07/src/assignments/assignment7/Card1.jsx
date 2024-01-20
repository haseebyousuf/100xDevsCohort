// eslint-disable-next-line react/prop-types
const Card1 = ({ name }) => {
  return (
    <div className='bg-[#CAE4FE] text-center p-6 rounded-lg shadow-lg w-96'>
      <div>
        <div>
          <svg
            className='mx-auto h-12 w-12 text-[#5271FF]'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8' />
            <path d='M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1' />
            <path d='M2 21h20' />
            <path d='M7 8v2' />
            <path d='M12 8v2' />
            <path d='M17 8v2' />
            <path d='M7 4h.01' />
            <path d='M12 4h.01' />
            <path d='M17 4h.01' />
          </svg>
        </div>
        <div className='text-3xl font-bold text-[#5271FF] mt-4'>
          Happy Birthday
        </div>
      </div>
      <div className='mt-4'>
        <p className='text-lg font-cursive text-[#5271FF]'>
          Wishing you a fantastic birthday,{' '}
          <span className='capitalize'>{name}</span>!
        </p>
        <p>
          May your special day overflow with joy, laughter, and love. Wishing
          you a year ahead filled with incredible moments, exciting adventures,
          and boundless opportunities for growth and happiness. 🥳🎂
        </p>
      </div>
    </div>
  );
};

export default Card1;
