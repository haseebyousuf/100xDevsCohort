/* eslint-disable react/prop-types */
const Card2 = ({ name }) => {
  return (
    <div className='bg-[#FCE38A] bg-gradient-to-br from-[#F38181] to-[#FCE38A] rounded-lg overflow-hidden shadow-lg text-center p-10 relative w-96'>
      <div className='absolute inset-0 flex items-center justify-center'>
        <SparklesIcon className='w-32 h-32 text-[#F38181] opacity-50' />
      </div>
      <div className='relative z-10'>
        <div>
          <p className='text-4xl font-bold text-white'>Happy Birthday!</p>
          <p className='text-2xl font-bold text-white capitalize'>{name}</p>
        </div>
        <p className='text-lg text-white'>
          As the candles on your cake multiply, may the glow of your spirit
          shine even brighter. Happy Birthday! 🎂 May your day be filled with
          the love of friends and family, and may the coming year be a canvas
          painted with success and joy.
        </p>
        <div className='mt-6'>
          <GiftIcon className='w-12 h-12 mx-auto text-white' />
        </div>
      </div>
    </div>
  );
};
function GiftIcon(props) {
  return (
    <svg
      {...props}
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
      <polyline points='20 12 20 22 4 22 4 12' />
      <rect width='20' height='5' x='2' y='7' />
      <line x1='12' x2='12' y1='22' y2='7' />
      <path d='M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z' />
      <path d='M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z' />
    </svg>
  );
}

function SparklesIcon(props) {
  return (
    <svg
      {...props}
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
      <path d='m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z' />
      <path d='M5 3v4' />
      <path d='M19 17v4' />
      <path d='M3 5h4' />
      <path d='M17 19h4' />
    </svg>
  );
}

export default Card2;
