import React from "react";
import BoxProject from "./BoxProject";

function Project() {
  return (
    <div className="w-full h-full py-[4rem] px-[10rem] max-[992px]:px-[2rem] max-sm:px-4">
      <h3 className="text-zinc-400 uppercase font-[font1] tracking-[5px] text-[15px]">
        Project
      </h3>
      <div className="flex items-center justify-center flex-wrap gap-10 mt-10">
        <BoxProject img={'/assets/project 1.jpg'} code={'https://github.com/zaheerali34/HTML-CSS-JS-Linkedln'} project={'https://projectza.netlify.app/'} />
        <BoxProject img={'/assets/project 2.jpg'} code={'https://github.com/zaheerali34/Project-E-Commerce'} project={'https://e-up.netlify.app/'} />
        <BoxProject img={'/assets/project 3.jpg'} code={'https://github.com/zaheerali34/Project-Magma-HTML-CSS-JS'} project={'https://projectmagma.netlify.app/'}  />
        <BoxProject />
        <BoxProject />
        <BoxProject />
      </div>
    </div>
  );
}

export default Project;