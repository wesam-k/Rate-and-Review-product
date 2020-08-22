import React from "react";

import { Card } from "react-bootstrap";
import { Avatar } from "@material-ui/core";

import Rate from "./Rate";

export default function Review(props) {
  return (
    <div>
      <li>
        <Card>
          <Card.Body>
            <div className="d-flex flex-row">
              <Avatar />
              <h3>{props.userName}</h3>
            </div>
            <Rate />
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.message}</Card.Text>
          </Card.Body>
        </Card>
      </li>
    </div>
  );
}
