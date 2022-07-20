import React from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'

const Pagination = (props) => {
  const {page, totalPages, onLeftClick, onRightClick} = props
  return(
    <div className="pagination-container">
      <button onClick={onLeftClick}>
        <BsFillArrowLeftCircleFill />
      </button>
      <div>{page} de {totalPages}</div>
      <button onClick={onRightClick}>
        <BsFillArrowRightCircleFill />
      </button>
    </div>
  );
}

export default Pagination;