import { useState } from 'react';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';

const BirthdayWish = () => {
  const [name, setName] = useState('');
  const [showCards, setShowCards] = useState(false);

  const handleGenerateCard = () => {
    setShowCards(true);
  };

  return (
    <div className='flex flex-col items-center justify-center w-full h-screen bg-slate-300'>
      {!showCards ? (
        <div className='flex gap-2'>
          <input
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleGenerateCard();
              }
            }}
            name='somerandomname'
            value={name}
            className='w-64 p-4 border-2 border-black rounded-lg sm:w-96'
            type='text'
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter Your Name'
          />
          <button
            onClick={handleGenerateCard}
            className='px-2 py-4 text-white rounded-lg cursor-pointer bg-slate-800 hover:bg-slate-700'
          >
            Generate Wish
          </button>
        </div>
      ) : (
        <div className='flex flex-col items-center w-full h-screen mt-20'>
          <div className='flex flex-col gap-4 sm:flex-row'>
            <Card1 name={name} />
            <Card2 name={name} />
            <Card3 name={name} />
          </div>
          <button
            onClick={() => {
              setShowCards(false);
              setName('');
            }}
            className='px-2 py-4 mt-5 text-white rounded-lg cursor-pointer bg-slate-800 hover:bg-slate-700'
          >
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default BirthdayWish;
