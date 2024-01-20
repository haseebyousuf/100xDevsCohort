/* eslint-disable react/prop-types */
const Card3 = ({ name }) => {
  return (
    <div className='bg-[#FCE38A] border-[#F38181] border-2 rounded-lg overflow-hidden shadow-lg w-96'>
      <div className='bg-[#F38181] text-[#ffffff] p-6'>
        <h1 className='text-4xl font-bold'>Happy Birthday!</h1>
      </div>
      <div className='p-6 space-y-4'>
        <div className='text-lg text-[#333333]'>
          <p>
            Dear, <span className='font-bold capitalize'>{name}</span>
          </p>
          <p>May your special day be filled with memories and flowers,</p>
          <p>friendship and happy hours.</p>
          <p>Wishing you all the joy your heart can hold!</p>
        </div>
      </div>
      <div className='flex items-center justify-center p-6'>
        <PartyPopperIcon className='w-12 h-12 text-[#F38181]' />
      </div>
    </div>
  );
};
function PartyPopperIcon(props) {
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
      <path d='M5.8 11.3 2 22l10.7-3.79' />
      <path d='M4 3h.01' />
      <path d='M22 8h.01' />
      <path d='M15 2h.01' />
      <path d='M22 20h.01' />
      <path d='m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10' />
      <path d='m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17' />
      <path d='m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7' />
      <path d='M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z' />
    </svg>
  );
}

export default Card3;
