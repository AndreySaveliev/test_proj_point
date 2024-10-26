import React, { useState } from "react";
import "./PageThree.css";
import icon1 from "../../assets/gridicon1.png";
import icon2 from "../../assets/gridicon2.png";
import bottle from "../../assets/bottle.png";
import bubble1 from "../../assets/1.png";
import bubble2 from "../../assets/2.png";
import bubble3 from "../../assets/3.png";
import bubble4 from "../../assets/4.png";
import bubble5 from "../../assets/5.png";
import bubble6 from "../../assets/6.png";
import bubble7 from "../../assets/7.png";
import bubble8 from "../../assets/8.png";
import Popup from "../Popup/Popup";
import { useSwipe } from "../../hooks/useSwipe";
function PageThree() {
  const { handleTouchEnd, handleTouchStart } = useSwipe("", "#pagetwo");

  const [isShown, setIsShown] = useState(false);

  const handleOpenPopup = () => {
    setIsShown(true);
  };

  const handleClosePopup = () => {
    setIsShown(false);
  };

  return (
    <>
      <Popup isShown={isShown} handleClosePopup={handleClosePopup} />
      <div
        className="pagethree"
        id="pagethree"
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchEnd={(e) => handleTouchEnd(e)}
      >
        <div className="bottle-div">
          <img src={bottle} className="bottle" />
          <img src={bubble1} className="bubble bubble-1" />
          <img src={bubble2} className="bubble bubble-2" />
          <img src={bubble3} className="bubble bubble-3" />
          <img src={bubble4} className="bubble bubble-4" />
          <img src={bubble5} className="bubble bubble-5" />
          <img src={bubble6} className="bubble bubble-6" />
          <img src={bubble7} className="bubble bubble-7" />
          <img src={bubble8} className="bubble bubble-8" />
        </div>
        <div className="pagethree__content">
          <p className="pagethree__title">Ключевое сообщение</p>
          <p className="pagethree__brand">
            BREND<span>XY</span>
          </p>
          <div className="pagethree__grid">
            <img className="grid__icon grid__icon-1" src={icon1} />
            <img className="grid__icon grid__icon-2" src={icon2} />
            <div className="grid__cellone">
              Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus
              vestibulum lorem sed risus ultricies
            </div>
            <div className="grid__celltwo">A arcu cursus vitae</div>
            <div className="grid__button" onClick={() => handleOpenPopup()}>
              <p className="grid__plus-button">+</p>
              <p className="button__text">Подробнее</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageThree;
