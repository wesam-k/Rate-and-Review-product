import React from "react";

import Review from "../components/Review";

export default function ReviewList(props) {
  return (
    <div>
      <ul>
        <h4>
          {props.reviewList.length !== 0 ? "All reviews" : "There is no review"}
        </h4>
        {props.reviewList.map((review) => (
          <Review
            key={review.id}
            rate={review.newRate}
            title={review.title}
            message={review.message}
            userName={review.userName}
            handleSubmit={props.handleSubmit(review.id)}
            handleRateChange={props.handleRateChange(review.id)}
            handleTitleChange={props.handleTitleChange(review.id)}
            handleMessageChange={props.handleMessageChange(review.id)}
            handleUserNameChange={props.handleUserNameChange(review.id)}
          />
        ))}
      </ul>
    </div>
  );
}
