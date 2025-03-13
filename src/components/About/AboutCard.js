import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aman Gupta </span>
            from <span className="purple"> Kanpur, India.</span>
            <br />
            I am currently pursuing a B.Tech in Computer Science and Engineering with specialization in AI at Pranveer Singh Institute of Technology.
            <br />
            I am passionate about building scalable web technologies, AI-driven applications, and ML Models. With a strong foundation in data structures, algorithms, and full-stack development, I strive to create impactful digital experiences.
            In Competitive Programming – Solved 500+ LeetCode problems, achieved a 5-star rating on HackerRank.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sketching
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technology
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Aman Gupta</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
