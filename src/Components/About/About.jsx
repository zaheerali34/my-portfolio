import React from 'react'

function About() {
  return (
    <div className='w-full h-screen flex items-start justify-center flex-col px-[15rem] max-[992px]:w-full max-[992px]:px-[5rem] max-sm:px-[2rem] max-sm:h-full max-sm:mt-[6rem]'>
        <h3 className='text-zinc-400 uppercase font-[font1] tracking-[5px] text-[15px]'>about me</h3>
        <p className='text-zinc-300 text-[2.5rem] pt-4 uppercase font-[font1] leading-[55px] max-[992px]:text-[2rem] max-md:text-[1.5rem] max-md:leading-[40px] max-sm:w-full max-sm:text-[1rem] max-sm:leading-[30px]'>I’m a passionate <span className='text-[#eb5939]'>Front-End Developer</span> with a deep interest in building visually stunning, user-friendly, and responsive interfaces. I specialize in transforming creative designs into clean, functional, and scalable web experiences.
        </p>
    </div>
  )
}

export default About