import React from 'react';

const Intro = () => {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
      <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold dark:text-white'>
        Will Okou
      </h1>
      <p className='text-base md:text-xl mb-3 font-medium'>
        Software Engineer & Web Developer
      </p>
      <p className='text-sm max-w-xl mb-6 font-bold'>
        I am a highly skilled full-stack developer with expertise in JavaScript,
        TypeScript, React, NextJS, TailwindCSS, Node, Redux, and more. I excel
        in both frontend and backend technologies, contributing to the
        development of various projects such as online learning platforms and
        customer-facing websites. With a BSc(Hons) degree in Computing and
        certifications in Software Engineering, Python programming, and User
        Experience (UX) Design, I bring a strong educational background and a
        versatile skill set to my work.
        <br />
        My experience spans volunteer work, leadership roles, and training
        programs, showcasing my dedication and adaptability in the field. Beyond
        my professional pursuits, I am passionate about staying updated with the
        latest technological advancements and enjoy fitness and online gaming.
        With my expertise and enthusiasm, I am a valuable asset to any
        development team.
      </p>
    </div>
  );
};

export default Intro;
