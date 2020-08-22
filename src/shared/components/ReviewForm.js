import React from "react";
import { useHistory } from "react-router-dom";

import { Form, Button } from "react-bootstrap";
import { Avatar } from "@material-ui/core";

import Watch from "../images/Watch.jpg";
import Rate from "./Rate";

import "../../scc/ReviewForm.css";

export default function ReviewForm(props) {
  const history = useHistory();
  const handleHomeBack = (e) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <div className="container-sm ">
      <div className="row mt-5">
        <Form>
          <h2 className="mb-5">Create a review</h2>
          <div className="d-flex flex-row ">
            <img
              src={Watch}
              alt=" Apple Watch"
              className="from-img mb-3 mr-5"
            />
            <h3 className="mt-3">Apple Watch Series 5</h3>
          </div>
          <hr />
          <Form.Label>Overall assessment</Form.Label>
          <div>
            <Rate
              className="ml-3"
              value={props.newRate}
              onClick={props.handleRateChange}
            />
          </div>
          <hr />
          <Form.Row>
            <Form.Group className="col-md-12">
              <Form.Label>Add a title</Form.Label>
              <Form.Control
                type="text"
                placeholder="What is the most important to know"
                value={props.title}
                onChange={props.handleTitleChange}
              />
            </Form.Group>
            <Form.Group className="col-md-12">
              <Form.Label>Write your review</Form.Label>
              <Form.Control
                as="textarea"
                rows="4"
                placeholder="what did you like or dislike"
                value={props.message}
                onChange={props.handleMessageChange}
              />
            </Form.Group>
            <Form.Group className="col-md-12">
              <Avatar />
              <Form.Label>Your name</Form.Label>
              <Form.Control
                type="text"
                placeholder="add Your name"
                onChange={props.handleUserNameChange}
                value={props.userName}
              />
            </Form.Group>
          </Form.Row>
          <hr />
          <div className="d-flex justify-content-between mb-5">
            <Button
              variant="secondary"
              className="btn btn.space"
              size="lg"
              onClick={handleHomeBack}
            >
              Back
            </Button>
            <Button
              variant="primary"
              type="submit"
              className="col-sm-3"
              onClick={props.handleSubmit}
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
