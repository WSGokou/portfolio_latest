import React from 'react';

const Contact = () => {
  return (
    <div className='flex flex-col mb-10 mx-auto'>
      <div className='flex justify-center items-center'>
        <form
          action='https://getform.io/f/86a3ce94-98bb-47a9-ab71-9d820613270c'
          method='POST'
          className='flex flex-col w-full md:w-7/12'
        >
          <input
            required
            type='text'
            name='name'
            placeholder='Name'
            className='p-2 bg-transparent border-2 rounded-md focus:outline-none'
          />
          <input
            required
            type='email'
            name='email'
            placeholder='Email'
            className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none'
          />
          <textarea
            required
            name='message'
            placeholder='Message'
            rows='10'
            className='p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none'
          />
          <button
            type='submit'
            className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white'
          >
            Work With Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
