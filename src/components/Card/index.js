import React from "react";

function Card(props) {
  return (
    <div className="card m-4 float-left">
        <img className="card-img-top" alt="colorname" src={props.image} id={props.id} onClick={() => props.handleClickEvent(props.id)} />
    </div>
  );
}

export default Card;