import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import accordian from "../../Assets/Projects/accordian.png"
import Boardmeet from "../../Assets/Projects/Boardmeet.png"
import briefview from "../../Assets/Projects/briefview.png"
import Clockapp from "../../Assets/Projects/Clockapp.png"
import imagehub from "../../Assets/Projects/imagehub.png"
import jorneyjunction from "../../Assets/Projects/jorneyjunction.png"
import reduxbag from "../../Assets/Projects/reduxbag.png"
import rock from "../../Assets/Projects/rock.png"
import student from "../../Assets/Projects/student.png"
import tictac from "../../Assets/Projects/tictac.png"
import Todolist from "../../Assets/Projects/Todolist.png"
import weather from "../../Assets/Projects/weather.png"


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
              imgPath={Boardmeet}
              isBlog={false}
              title="BoardMeet"
              description="BoardMeet, a real-time whiteboard and one-on-one video calling app using Node.js, WebRTC and Socket.io. Optimized performance to achieve 95% real-time sync accuracy, reduced latency by 40%, and enabled secure, low-latency 
communication for 100% private two-user session. "
              ghLink="https://github.com/terror-akshat/FOSS-HACK-2025-Team-Elite-Kanpur"
              demoLink="https://charming-chebakia-38d373.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imagehub}
              isBlog={false}
              title="Photo Matrix"
              description="Photo Matrix is a comprehensive image management application designed to provide users with a seamless and efficient way to handle their digital assets. The platform allows users to effortlessly upload, store, organize, share, and delete images, ensuring a smooth and user-friendly experience.
Built with a modern tech stack, Photo Matrix leverages MongoDB for secure and scalable data storage, Express.js and Node.js for robust backend functionality, and React for an interactive and dynamic frontend."
              ghLink="https://github.com/fusionAMAN/imagehub"
              demoLink="https://photomatrix.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={briefview}
              isBlog={false}
              title="Brief View"
              description=" an advanced text summarization tool. Integrated new features like audio/video input processing and bullet
point output for enhanced processing speed by 35% and achieved 90%+ accuracy using Python, NLP, Transformer
based models, Flask, Speech to Text APIs. "
              ghLink="https://github.com/fusionAMAN/BriefView"
              demoLink="https://briefview.onrender.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jorneyjunction}
              isBlog={false}
              title="Journey Junction"
              description="A fully responsive website that provides an immersive virtual tour of Bharat, showcasing its rich cultural heritage and diverse landscapes. The platform highlights the top tourist attractions, offering detailed insights into historical landmarks, scenic destinations, and hidden gems. It also features accommodation options, helping travelers find the best hotels and stays across various regions. Additionally, the website explores India’s culinary diversity, presenting must-try dishes and local delicacies from different states. Built using HTML, CSS, JavaScript, and Bootstrap 5, the website ensures a visually appealing, mobile-friendly, and interactive user experience."
              ghLink="https://github.com/fusionAMAN/journey-junction"
              demoLink="https://fusionaman.github.io/journey-junction/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reduxbag}
              isBlog={false}
              title="Redux-Bag"
              description="Developed a Redux-powered shopping bag feature using React and Redux, enabling efficient state management for adding, removing, and updating cart items. Implemented Redux Toolkit for streamlined store setup and optimized performance. Designed a responsive UI with real-time updates, ensuring a seamless shopping experience. Integrated local storage persistence, allowing users to retain their cart items even after page refresh."
              ghLink="https://github.com/fusionAMAN/Redux-Bag"
               demoLink="https://redux-bag-2c3c5c.netlify.app/"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={student}
              isBlog={false}
              title="Student Exam Performance Prediction"
              description="Developed a Student Exam Performance Prediction system that estimates scores based on factors like gender, ethnicity, parental education, and test preparation. Using writing and reading scores as inputs, the model leverages machine learning to provide accurate predictions. This tool helps students, parents, and educators assess performance trends and make informed academic decisions."
              ghLink="https://github.com/fusionAMAN/mlproject"
              demoLink="https://github.com/fusionAMAN/mlproject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Clockapp}
              isBlog={false}
              title="Clock App"
              description="Designed and developed a sleek, minimalistic clock application using the Kivy framework for a smooth and visually appealing experience. Optimized backend logic in Python, reducing load time by 25% and improving UI responsiveness by 40%. Integrated asynchronous processing for seamless performance, boosting overall efficiency by 20%. The app delivers a lightweight, elegant, and highly responsive timekeeping solution with enhanced reliability."
              ghLink="https://github.com/fusionAMAN/clock-app"
               demoLink="https://github.com/fusionAMAN/clock-app"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Forecast"
              description="Developed a Weather Forecasting application that provides real-time weather updates and predictions based on location. The project integrates APIs to fetch accurate meteorological data, including temperature, humidity, wind speed, and precipitation. Designed with a user-friendly interface, it ensures seamless navigation and accessibility across devices. Built using HTML, CSS, JavaScript, and APIs like OpenWeatherMap, the system delivers reliable weather insights. This project helps users plan their activities efficiently by offering detailed and up-to-date forecasts."
              ghLink="https://github.com/fusionAMAN/Weather-website"
               demoLink="https://telltodayweather.netlify.app/"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todolist}
              isBlog={false}
              title="Things Done"
              description="Developed Things Done, a user-friendly To-Do List application for efficient task management and productivity tracking. Built with a clean and intuitive interface, it allows users to add, edit, delete, and mark tasks as complete effortlessly. Integrated reminders and categorization
               features to enhance organization and streamline daily workflows. Designed for responsiveness and 
               smooth performance, ensuring seamless usability across devices."
              ghLink="https://github.com/fusionAMAN/Todolist"
               demoLink="https://singular-basbousa-fa21ac.netlify.app/"    
                 
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rock}
              isBlog={false}
              title="Rock-Paper-Scissors "
              description="Developed a dynamic Rock-Paper-Scissors game using JavaScript, featuring interactive UI and real-time result updates. Implemented randomized AI logic to ensure unpredictable and engaging gameplay. Utilized HTML, CSS, and JavaScript for a responsive and seamless user experience across devices."
              ghLink="https://github.com/fusionAMAN/Rock_Paper_Scissor"
               demoLink="https://rockpapersecissor.netlify.app/"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={accordian}
              isBlog={false}
              title="Accordian"
              description="Developed an interactive Accordion Component using React, enabling smooth expansion and collapse of content sections. Utilized React hooks (useState) for state management, ensuring a dynamic and responsive user experience. Designed with CSS animations for seamless transitions and an engaging UI. Built for efficiency and reusability, making it easy to integrate into various web applications."
              ghLink="https://github.com/fusionAMAN/accordian"
               demoLink="https://accordiandev.netlify.app/"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictac}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="Developed an interactive Tic-Tac-Toe game using React, featuring real-time gameplay and dynamic UI updates. Implemented useState for state management, enabling smooth player moves and win detection. Designed a responsive and visually appealing interface with CSS for an engaging user experience. Added game reset functionality and logic to identify winners or declare a draw."
              ghLink="https://github.com/fusionAMAN/tictactoe"
               demoLink="https://katam-zero.netlify.app/"      
            />
          </Col>



        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
