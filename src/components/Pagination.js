import React from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import {
  CgChevronDoubleLeftO,
  CgChevronDoubleRightO,
} from "react-icons/cg";

const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRightClick, onLastPageClick, onFirstPageClick } = props;
  return (
    <div className="pagination-container">
      <span onClick={onFirstPageClick} className="pagination-btn pagination-outer-btn">
        <CgChevronDoubleLeftO />
      </span>
      <span onClick={onLeftClick} className="pagination-btn mb-1">
        <BsFillArrowLeftCircleFill />
      </span>
      <div className="mx-2 mt-1">
        {page} de {totalPages}
      </div>
      <span onClick={onRightClick} className="pagination-btn mb-1">
        <BsFillArrowRightCircleFill />
      </span>
      <span onClick={onLastPageClick} className="pagination-btn pagination-outer-btn">
        <CgChevronDoubleRightO />
      </span>
    </div>
  );
};

export default Pagination;
