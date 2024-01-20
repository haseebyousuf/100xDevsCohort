import { useState } from 'react';
import OtpInput from './OtpInput';

const OtpLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState({
    success: false,
    message: '',
  });
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    const regex = /[^0-9]/g;
    if (phoneNumber.length !== 10 || regex.test(phoneNumber)) {
      alert('Invalid phone number');
      return;
    }
    setShowOtpForm(true);
  };

  const onSubmitOtp = (otp) => {
    setShowSuccess({ ...showSuccess, success: true, message: otp });
  };
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen '>
      <div className='p-6 text-center border-2 border-black rounded-lg w-96'>
        <h1 className='text-2xl font-bold'>Login With Phone</h1>
        {showSuccess.success ? (
          <div>
            <div className='p-2 text-lg font-bold text-green-600'>
              You have Successfully Entered the OTP:{' '}
              <span className='text-black'>{showSuccess.message}</span>
            </div>
            <button
              onClick={() => {
                setShowSuccess({ ...showSuccess, success: false });
                setShowOtpForm(false);
              }}
              className='w-full px-2 py-4 text-white rounded-lg bg-slate-600 hover:bg-slate-600/90'
            >
              Go Back
            </button>
          </div>
        ) : !showOtpForm ? (
          <form
            className='flex flex-col gap-2 mt-4'
            onSubmit={handlePhoneSubmit}
          >
            <input
              className='w-full px-2 py-4 border border-black rounded-lg'
              placeholder='Enter Phone Number'
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
            <button
              type='submit'
              className='w-full px-2 py-4 text-white rounded-lg bg-slate-600 hover:bg-slate-600/90'
            >
              Submit
            </button>
          </form>
        ) : (
          <div className='flex flex-col gap-2 mt-4'>
            <h1 className='my-1 text-lg text-center'>Enter OTP</h1>
            <OtpInput length={4} onSubmitOtp={onSubmitOtp} />
          </div>
        )}
      </div>
    </div>
  );
};

export default OtpLogin;
