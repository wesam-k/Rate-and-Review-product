import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import { useHistory } from "react-router-dom";

import { Card, Button } from "react-bootstrap";

import ReviewList from "./shared/components/ReviewList";
import Rate from "../src/shared/components/Rate";
import Watch from "../src/shared/images/Watch.jpg";
import ReviewForm from "./shared/components/ReviewForm";

import "../src/scc/Product.css";

export default function Product(props) {
  const [newRate, setNewRate] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [reviewList, setReviewList] = useState([]);
  const id = uuid();
  const history = useHistory();

  // useEffect(() => {
  //   const storageReviewList = JSON.parse(localStorage.getItem("react_todo_list"));
  //   if (storageReviewList) {
  //     setReviewList(storageReviewList);
  //   }
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem("react_review", JSON.stringify(reviewList));
  // }, [reviewList]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      id: id,
      time: new Date(),
      newRate: newRate,
      title: title,
      message: message,
      userName: userName,
    };
    const updatedItems = [...reviewList, newReview];
    setReviewList(updatedItems);
    setTitle("");
    setMessage("");
    setUserName("");
    history.push('/home')
  };
  const handleRateChange = (rating) => {
    setNewRate(rating);
  };

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const handleMessageChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };
  const handleUserNameChange = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };

  const handleGoToForm = () => {
    history.push("/reviewForm");
  };

  return (
    <div className="container-sm ">
      <div className="row mt-5">
        <Card style={{ width: "23rem" }}>
          <Card.Body className="ml-4">
            <Card.Img
              src={Watch}
              alt=" Apple Watch"
              className="card-img mb-2 ml-3"
            />
            <Card.Title>
              <h3 className="mt-3">Apple Watch Series 5</h3>
            </Card.Title>
            <Rate />
            <Card.Title>
              <h5>price € 304,95</h5>
            </Card.Title>
            <Button className="mt-3" type="submit" onClick={handleGoToForm}>
              Write customer review
            </Button>
          </Card.Body>
        </Card>
        <div>
          <ReviewList
            handleSubmit={handleSubmit}
            handleTitleChange={handleTitleChange}
            handleMessageChange={handleMessageChange}
            handleUserNameChange={handleUserNameChange}
            handleRateChange={handleRateChange}
            reviewList={reviewList}
            title={title}
            message={message}
            userName={userName}
          />
        </div>
      </div>
    </div>
  );
}
