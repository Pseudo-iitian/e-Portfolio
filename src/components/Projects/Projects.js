import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import addtocart from "../../Assets/Projects/addtocart.png";
import dyslexia from "../../Assets/Projects/dyslexia.png";
import BtechLibrary from "../../Assets/Projects/library.png";
import linksaver from "../../Assets/Projects/linksaver.png";
import transcript from "../../Assets/Projects/transcript.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BtechLibrary}
              isBlog={false}
              title="B.Tech Library"
              description="Architected and coded a responsive and visually appealing B.Tech Librarywebsite, leveraging HTML, CSS, JS, and Firebase Storage, resulting in a 25%increase in page views and a 15% decrease in bounce rate."
              ghLink="https://github.com/Pseudo-iitian/btechlibrary"
              demoLink="https://pseudo-iitian.github.io/btechlibrary/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={transcript}
              isBlog={false}
              title="Video Transcripter"
              description="Achieved a transcription accuracy rate of over 95%, resulting in a significant reduction in manual transcription time by 70% for users. Implementedefficient algorithms resulting in an average transcription speed of 200 wordsper minute, enhancing productivity and workflow efficiency."
              ghLink="https://github.com/Pseudo-iitian/Video-Transcript-Project"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dyslexia}
              isBlog={false}
              title="Dyslexia Prediction Model"
              description="The project aimed to predict reading and writing disabilities using a machine learning model. It achieved an 85% accuracy rate with a 20% reduction in false positives. Key features were identified from 500 samples."
              ghLink="https://github.com/Aayush894/Dysgraphia-Prediction-Model"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={addtocart}
              isBlog={false}
              title="Add To Cart"
              description="Developed an e-commerce web application enabling users to add items to their carts, streamlining the shopping experience for enhanced convenience."
              ghLink="https://github.com/Pseudo-iitian/AddToCart_Individual_Project"
              demoLink="https://bought-this-too-by-abhishek-verma.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={linksaver}
              isBlog={false}
              title="Lead Tracker Extension"
              description="Developed a browser extension named 'Lead Tracker\' for saving website links, facilitating efficient organization and retrieval of important leads."
              ghLink="https://github.com/Pseudo-iitian/leadTrackerProject"

            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
