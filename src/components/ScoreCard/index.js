import React from "react";

function ScoreCard(props) {
    return (
        <div className="card mt-2 mb-2 ">
            <div className="card-header alert-success lead">
                <strong>{props.message}</strong>
                <div className="float-right">
                    <strong>Score: </strong> {props.score}
                </div>
            </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    );
}

export default ScoreCard;