import React from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  return (
    <div className="pagination-container">
      <span onClick={onLeftClick} className="pagination-btn">
        <BsFillArrowLeftCircleFill />
      </span>
      <div>
        {page} de {totalPages}
      </div>
      <span onClick={onRightClick} className="pagination-btn">
        <BsFillArrowRightCircleFill />
      </span>
    </div>
  );
};

export default Pagination;
