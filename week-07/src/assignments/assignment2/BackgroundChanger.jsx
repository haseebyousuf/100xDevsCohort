import { useState } from 'react';

const colors = [
  {
    id: 1,
    color: 'red',
    name: 'Red',
  },
  {
    id: 2,
    color: 'blue',
    name: 'Blue',
  },
  {
    id: 3,
    color: 'green',
    name: 'Green',
  },
  {
    id: 4,
    color: 'orange',
    name: 'Orange',
  },
  {
    id: 5,
    color: 'teal',
    name: 'Teal',
  },
  {
    id: 6,
    color: 'black',
    name: 'Black',
  },
];
const BackgroundChanger = () => {
  const [background, setBackground] = useState('white');
  return (
    <div
      style={{ backgroundColor: background }}
      className={`w-screen h-screen`}
    >
      <div className='flex items-end justify-center w-full h-full '>
        <div className='flex gap-2 px-6 py-3 mb-5 bg-slate-200 rounded-3xl'>
          {colors.map((color) => (
            <button
              onClick={() => setBackground(color.color)}
              style={{
                color: color.color,
                outline: `2px solid ${color.color}`,
              }}
              key={color.id}
              className='px-4 py-1 rounded-3xl'
            >
              {color.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackgroundChanger;
