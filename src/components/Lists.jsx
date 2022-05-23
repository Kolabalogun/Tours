import React from "react";
import "./Style.css";

const Lists = ({
  img,
  name,
  info,
  price,
  id,
  handleDelete,
  handleInfo,
  readMore,
}) => {
  return (
    <div className="list">
      <div className="img-div">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <div className="top">
          <h4>{name}</h4>
          <div className="price">${price}</div>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <span onClick={() => handleInfo(id)} className="btn-text">
            {readMore ? " show less" : "Read More"}
          </span>
        </p>
        <button onClick={() => handleDelete(id)}>Not Interested</button>
      </div>
    </div>
  );
};

export default Lists;
