import React from "react";
import arrow from "../../assets/arrow.png";
import pinkSperm from "../../assets/pink_sperm_1.png";
import virus1 from "../../assets/virus1.png";
import virus2 from "../../assets/virus2.png";
import virus3 from "../../assets/virus3.png";
import virus4 from "../../assets/virus4.png";
import "./PageOne.css";
import { useSwipe } from "../../hooks/useSwipe";
function PageOne() {
  const { handleTouchEnd, handleTouchStart } = useSwipe("#pagetwo", "");

  const scrollIntoView = () => {
    document.querySelector("#pagetwo").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="pageone"
      id="pageone"
      onTouchStart={(e) => handleTouchStart(e)}
      onTouchEnd={(e) => handleTouchEnd(e)}
    >
      <img src={virus1} className="virus__img virus-1" />
      <img src={virus2} className="virus__img virus-2" />
      <img src={virus3} className="virus__img virus-3" />
      <img src={virus4} className="virus__img virus-4" />
      <div className="pageone-wrapper">
        <span className="pageone__title-span_thin">Привет, </span>
        <br />
        <h1 className="pageone__title">
          это <span className="pageone__title-span_bold">не</span> коммерческое
          задание
        </h1>
        <img className="pageone_spem" src={pinkSperm} />
        <button className="pageone__button" onClick={() => scrollIntoView()}>
          <div className="pageone__button_arrow-container">
            <img className="pageone__button_arrow" src={arrow} />
          </div>
          <p className="pageone__button_text">Что дальше?</p>
        </button>
      </div>
    </section>
  );
}

export default PageOne;
