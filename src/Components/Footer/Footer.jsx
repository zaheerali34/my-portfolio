import React from "react";

function Footer() {
  return (
    <div className="w-full h-full bg-black py-[8rem] px-[10rem] text-white">
      <h3>connect</h3>

      <div className="w-full flex items-start justify-between mt-10">
        <ul>
          <li>Linkedin</li>
          <li>Twitter</li>
          <li>Github</li>
        </ul>

        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
        </ul>

        <div>
          <div>
            <h3>Email</h3>
            <span>zaheerrahman0@gmail.com</span>
          </div>

          <div>
            <h3>Phone</h3>
            <span>03201973212</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
