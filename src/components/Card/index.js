import React from "react";

function Card(props) {
  return (
    <div className="card m-3 float-left">
        <img className="card-img-top" alt={props.name} src={props.image} id={props.id} onClick={() => props.handleClickEvent(props.id)} />
    </div>
  );
}

export default Card;