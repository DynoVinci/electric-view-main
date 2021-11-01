import React, { useState } from "react";
import ImgCover from "../../assets/img/cover.png";
import ImageCartLogo from "../../assets/img/Dribbble-Light-Preview.png";

const MainImage = () => {
  const [checkUser, setCheckUser] = useState(false);
  return (
    <>
      <section class="main-visual">
        <div class="main-catch">
          <p class="text-1">GET THE RIGHT FLOW OF MUSIC</p>
          <p class="text-2">Enjoy the exceptional quality of our Products</p>
        </div>
        <img src={ImgCover} alt="" />
        {checkUser && (
          <p class="img">
            <a href="/cart">
              <img src={ImageCartLogo} alt="" />
            </a>
          </p>
        )}
      </section>
    </>
  );
};

export default MainImage;
