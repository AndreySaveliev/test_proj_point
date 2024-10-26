import React, { useEffect } from "react";
import "./Pagination.css";
export default function Pagination({
  numberOfPages,
  page,
  handlePrevPage,
  handleNextPage,
  handleSetPage,
}) {
  return (
    <div className="pagination">
      <button
        onClick={() => handlePrevPage()}
        className="pagination-button button-prev"
      />
      <div className="pagination__pages">
        {numberOfPages &&
          [...Array(numberOfPages)].map((number, id) => {
            return (
              <div
                onClick={() => handleSetPage(id)}
                className={`pagination-page ${id <= page && "active-page"}`}
              ></div>
            );
          })}
      </div>
      <button
        onClick={() => handleNextPage()}
        className="pagination-button button-next"
      />
    </div>
  );
}
