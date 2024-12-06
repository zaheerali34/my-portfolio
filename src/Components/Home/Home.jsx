import React from "react";
import "remixicon/fonts/remixicon.css";

function Home() {
  return (
    <div className='w-full h-screen bg-[url("../assets/bg.jpg")] bg-center bg-cover bg-no-repeat relative'>
      <div className="w-full h-full absolute top-0 bg-[#00000030] flex items-center justify-center font-[font1] uppercase flex-col">
        <h3 className="text-zinc-300 tracking-[5px]">Zaheer Rahman</h3>
        <h1 className="text-[7vw] leading-[6rem] mt-[2rem] font-bold text-zinc-200">
          I am
        </h1>
        <h1 className="text-[7vw] leading-[6rem] font-bold text-[#eb5939]">
          Frontend
        </h1>
        <h1 className="text-[7vw] leading-[6rem] font-bold text-zinc-200">
          developer
        </h1>

        <ul className="text-white fixed left-[3rem] bottom-[3rem] flex items-center flex-col gap-[20px] cursor-pointer">
          <a href="www.linkedin.com/in/zaheer-rahman-755b18280"><i class="ri-linkedin-fill text-[1.5rem] hover:text-[#eb5939] transition duration-[0.3s]"></i></a>
          <i class="ri-twitter-x-line text-[1.5rem] hover:text-[#eb5939] transition duration-[0.3s]"></i>
          <a href="https://github.com/zaheerali34?tab=repositories"> <i class="ri-github-fill text-[1.5rem] hover:text-[#eb5939] transition duration-[0.3s]"></i></a>
        </ul>
      </div>
    </div>
  );
}

export default Home;
