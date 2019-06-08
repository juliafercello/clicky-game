import React from "react";

function Card(props) {
  return (
    <div className="card m-4 float-left" style={{width: '18rem'}}>
        <img className="card-img-top img-fluid" alt="neigh" src={props.image} />
    </div>
  );
}

export default Card;