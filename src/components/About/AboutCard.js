import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Abhishek Verma</span>
            from <span className="purple"> Uttar Pradesh, India.</span>
            <br />
            Upcoming Computer Science Graduate.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Indian Scriptures
            </li>
            <li className="about-activity">
              <ImPointRight /> Running
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> 
            </li> */}
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Do what you are passionate about!"{" "}
          </p>
          <footer className="blockquote-footer">Abhishek Verma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
