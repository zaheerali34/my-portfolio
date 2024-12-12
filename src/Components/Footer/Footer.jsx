import React from "react";

function Footer() {
  return (
    <div className="w-full h-full bg-black py-[6rem] px-[10rem] text-white font-[font1] max-[992px]:px-[4rem]">
      <h3 className="text-[15px] uppercase tracking-[5px] font-semibold text-zinc-400">connect</h3>

      <div className="w-full flex items-start justify-between mt-10 max-sm:flex-col max-sm:flex-wrap">
        <ul className="text-[2.5vw] font-bold leading-[45px] text-zinc-300 cursor-pointer max-sm:text-[4vw]">
          <li className=" transition duration-[0.3s] hover:text-[#eb5939]">Linkedin</li>
          <li className=" transition duration-[0.3s] hover:text-[#eb5939]">Twitter</li>
          <li className=" transition duration-[0.3s] hover:text-[#eb5939]">Github</li>
        </ul>

        <ul className="text-[2.5vw] font-bold leading-[45px] text-zinc-300 cursor-pointer max-sm:text-[4vw]">
          <li className=" transition duration-[0.3s] hover:text-[#eb5939]">Facebook</li>
          <li className=" transition duration-[0.3s] hover:text-[#eb5939]">Instagram</li>
        </ul>

        <div className="flex items-start flex-col gap-4 max-sm:mt-10">
          <div>
            <h3 className="text-sm">Email</h3>
            <span className="text-zinc-400 text-[15px] font-[font1]">zaheerrahman0@gmail.com</span>
          </div>

          <div>
            <h3 className="text-sm">Phone</h3>
            <span className="text-zinc-400 text-[15px] font-[font1]">03201973212</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
