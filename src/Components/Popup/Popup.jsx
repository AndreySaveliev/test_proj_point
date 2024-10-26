import React, { useEffect, useState } from "react";
import "./Popup.css";
import Pagination from "../Pagination/Pagination";
import info from "../../../public/data.json";
function Popup({ isShown, handleClosePopup }) {
  const [page, setPage] = useState(0);
  const [data, setData] = useState(info);
  const [shownData, setShownData] = useState([]);

  const handleNextPage = () => {
    if (page < data.length / 3 - 1) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleSetPage = (page) => {
    setPage(page);
  };

  const closePopup = () => {
    handleClosePopup();
    setPage(0);
  };

  useEffect(() => {
    let sliceOfData = data.slice(page * 3, page * 3 + 3);
    setShownData(sliceOfData);
  }, [page]);

  return (
    <div className={`popup ${isShown && "popup__show"}`}>
      <div className="popup__wrapper">
        <button onClick={() => closePopup()} className="popup__close" />
        <p className="popup__title">преимущества</p>
        <p className="popup__brand">
          BREND<span>XY</span>
        </p>
        <div className="popup__list">
          {shownData &&
            shownData.map((point, key) => {
              return (
                <div className="popup__list-div" key={point.id}>
                  <span>{point.id}</span>
                  <p className="popup__list-text text-1">{point.text}</p>
                </div>
              );
            })}
        </div>
        <Pagination
          numberOfPages={data.length / 3}
          page={page}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          handleSetPage={handleSetPage}
        />
      </div>
    </div>
  );
}

export default Popup;
