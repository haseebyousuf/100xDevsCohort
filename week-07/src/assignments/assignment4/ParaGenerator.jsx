import { useRef, useState } from 'react';

const ParaGenerator = () => {
  const inputRef = useRef();
  const [para, setPara] = useState('');

  const handleGeneratePara = () => {
    const numOfWords = parseInt(inputRef.current.value);
    const wordsArray = [
      'This',
      'is',
      'a',
      'random',
      'paragraph',
      'generated',
      'based',
      'on',
      'your',
      'input',
    ];

    const allWords = [];
    for (let i = 0; i < numOfWords; i++) {
      allWords.push(wordsArray[Math.floor(wordsArray.length * Math.random())]);
    }

    return setPara(allWords.join(' '));
  };
  return (
    <>
      <div className='flex items-center justify-center w-full h-full '>
        <div className='flex flex-col items-center gap-3 mt-16'>
          <h1 className='text-3xl font-bold'>Para Generator</h1>
          <div className='flex gap-3'>
            <input
              ref={inputRef}
              className='px-4 py-2 rounded-md w-96 bg-slate-200'
              type='text'
              placeholder='Number of words'
            />
            <button
              onClick={handleGeneratePara}
              className='px-4 py-2 text-white rounded-md outline-none bg-slate-700'
            >
              Generate
            </button>
          </div>
        </div>
      </div>
      {para.length > 0 && (
        <div className='flex flex-col items-center justify-center w-full h-full mt-20'>
          <h1 className='text-2xl font-bold underline'>Generated Para</h1>
          <p className='w-[80%] mt-2'>{para}</p>
        </div>
      )}
    </>
  );
};

export default ParaGenerator;
