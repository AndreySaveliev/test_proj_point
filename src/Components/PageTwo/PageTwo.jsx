import React, { useState, useRef, useEffect } from "react";
import sperm1 from "../../assets/sperm1.png";
import sperm2 from "../../assets/sperm2.png";
import sperm3 from "../../assets/sperm3.png";
import sperm4 from "../../assets/sperm4.png";
import sperm5 from "../../assets/sperm5.png";
import "./PageTwo.css";
import { useSwipe } from "../../hooks/useSwipe";
function PageTwo() {
  const { handleTouchEnd, handleTouchStart } = useSwipe(
    "#pagethree",
    "#pageone"
  );

  const scrollbarRef = useRef(null);
  const pageRef = useRef(null);
  const [top, setTop] = useState(0);
  const [playAnimation, setPlayAnimation] = useState(false);

  const handeScroll = (e) => {
    const scrollbar = scrollbarRef.current;
    setTop(scrollbar.value);
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const animation = (ent) => {
    setPlayAnimation(ent[0].isIntersecting);
  };

  useEffect(() => {
    const obs = new IntersectionObserver(animation, options);
    if (pageRef.current) {
      obs.observe(pageRef.current);
    }
    return () => {
      if (pageRef.current) obs.unobserve(pageRef.current);
    };
  }, [pageRef.current]);

  return (
    <div
      id="pagetwo"
      className="pagetwo"
      ref={pageRef}
      onTouchStart={(e) => handleTouchStart(e)}
      onTouchEnd={(e) => handleTouchEnd(e)}
    >
      <img
        className={`sperm sperm1 ${playAnimation && "sperm_active"}`}
        src={sperm1}
      />
      <img
        className={`sperm sperm2 ${playAnimation && "sperm_active"}`}
        src={sperm2}
      />
      <img
        className={`sperm sperm3 ${playAnimation && "sperm_active"}`}
        src={sperm3}
      />
      <img
        className={`sperm sperm4 ${playAnimation && "sperm_active"}`}
        src={sperm4}
      />
      <img
        className={`sperm sperm5 ${playAnimation && "sperm_active"}`}
        src={sperm5}
      />
      <div className="pagetwo-wrapper">
        <h2 className="pagetwo__title">Текст сообщения</h2>
        <input
          onChange={(e) => handeScroll(e)}
          type="range"
          className="pagetwo__scrollbar"
          defaultValue={0}
          min="0"
          max="256"
          ref={scrollbarRef}
        />
        <div className="pagetwo__message">
          <p className="pagetwo__text" style={{ top: -top }}>
            <span className="pagetwo__text-span">
              Lorem ipsum dolor sit amet,
            </span>{" "}
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Duis ut diam quam nulla. Mauris in
            aliquam sem fringilla ut morbi tincidunt. Vitae aliquet nec
            ullamcorper sit amet risus nullam eget felis. Nulla pharetra diam
            sit amet nisl. Eget nulla facilisi etiam dignissim diam quis enim
            lobortis. Est sit amet facilisis magna. Neque laoreet suspendisse
            interdum consectetur libero id. Nec ullamcorper sit amet risus
            nullam eget felis eget. Mollis aliquam ut porttitor leo a diam
            sollicitudin tempor id. Euismod quis viverra nibh cras pulvinar
            mattis nunc. Massa massa ultricies mi quis. Sit amet massa vitae
            tortor condimentum lacinia. Et malesuada fames ac turpis egestas
            integer eget. Elementum pulvinar etiam non quam lacus suspendisse
            faucibus interdum posuere.
            <br /> <br />
            Amet justo donec enim diam vulputate ut pharetra sit. Risus
            ultricies tristique nulla aliquet enim tortor at auctor. Velit sed
            ullamcorper morbi tincidunt ornare massa. Quis hendrerit dolor magna
            eget est lorem ipsum. Etiam dignissim diam quis enim. Gravida neque
            convallis a cras. Ut enim blandit volutpat maecenas volutpat. Mauris
            sit amet massa vitae tortor condimentum lacinia quis vel.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PageTwo;
