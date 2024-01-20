import { useEffect, useRef, useState } from 'react';

/* eslint-disable react/prop-types */
const OtpInput = ({ length = 4, onSubmitOtp = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));
  const inputRefs = useRef([]);
  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    // allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    const combinedOtp = newOtp.join('');
    if (combinedOtp.length === length) {
      // submit otp is combined length is equal to given length
      onSubmitOtp(combinedOtp);
    }
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      // jump to next input
      inputRefs.current[index + 1].focus();
    }
  };
  const handleClick = (index) => {
    // on click keep the selection at end
    inputRefs.current[index].setSelectionRange(1, 1);

    if (index > 0 && !otp[index - 1]) {
      // if there is an empty input before the clicked input jump to that input
      inputRefs.current[otp.indexOf('')].focus();
    }
  };
  const handleKeyDown = (e, index) => {
    // jump to previous input when backspace is clicked
    if (
      e.key === 'Backspace' &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);
  return (
    <div>
      <div className='flex justify-center gap-4'>
        {otp.map((value, index) => (
          <input
            key={index}
            type='text'
            ref={(input) => (inputRefs.current[index] = input)}
            value={value}
            onChange={(e) => {
              handleOtpChange(e, index);
            }}
            onKeyDown={(e) => {
              handleKeyDown(e, index);
            }}
            onClick={() => {
              handleClick(index);
            }}
            className='w-16 p-4 text-center border-2 border-black rounded-lg'
          />
        ))}
      </div>
      {/* <button className='w-full px-2 py-4 mt-5 text-white rounded-lg bg-slate-600 hover:bg-slate-600/90'>
        Submit
      </button> */}
    </div>
  );
};

export default OtpInput;
