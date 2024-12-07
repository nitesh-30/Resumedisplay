import React from "react";
import styled from "styled-components";
import  { useState } from "react";

const App = () => {
    const [activeProject, setActiveProject] = useState(null);

  const closePopup = () => setActiveProject(null);
   
  const projectDemos = {
    locationTracking: "Details about the Location Tracking project.",
    cdrGenerator: "Details about the Call Detail Record Generator project.",
    skinCancerDetection: "Details about the Skin Cancer Detection project.",
    nerSystem: "Details about the NER System with SpaCy project.",
    aiChatbot: "Details about the AI Chatbot project.",
  };
  const imagedemo = {
    locationTracking: "/images/location.jpg",
    cdrGenerator: "/images/cdr.jpg",
    skinCancerDetection: "/images/skinreport.pdf",
    nerSystem: "/images/ner.jpg",
    aiChatbot: "/images/ai.jpg",
  };
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume/Nitesh Resume(Ats2).pdf';
    link.download = 'Nitesh_Resume.pdf'; // Suggested file name
    link.click();
  };
  return (
    <Container>
      <Navbar>
        <Menu>
          <MenuItem>Report</MenuItem>
          <MenuItem>Portfolio</MenuItem>
          <ResumeButton>Resume</ResumeButton>
        </Menu>
      </Navbar>
      <AvatarContainer>
        <Header>
          <h2>Welcome to My Portfolio</h2>
          <p>
            Showcasing my expertise in Data Science, Machine Learning, and Web
            Development.
          </p>
        </Header>
        </AvatarContainer>
     
      <Section>
        <h2>Skills</h2>
        <SkillGrid>
          <SkillCard>
           
            <p>Programming Languages</p>
            <DetailCard className="details">
              <p>C++, Python, C, SQL, Pandas, Numpy</p>
            </DetailCard>
          </SkillCard>
          <SkillCard>
            
            <p>Machine Learning</p>
            <DetailCard className="details">
              <p>Markov Chain, Random Forest, LSTM, CNN</p>
            </DetailCard>
          </SkillCard>
          <SkillCard>
           
            <p>Web Development</p>
            <DetailCard className="details">
              <p>Django, HTML/CSS, React</p>
            </DetailCard>
          </SkillCard>
          <SkillCard>
            
            <p>Tools</p>
            <DetailCard className="details">
              <p>Pycharm, VS Code, Jupyter Notebook, Google Colab</p>
            </DetailCard>
          </SkillCard>
        </SkillGrid>
      </Section>
     
      <Section>
        <h2>Projects</h2>
        <Projects>
          <Project>
            <h3>Location Tracking</h3>
            <p>
              Predicting future locations based on past data using Markov
              Chains.
            </p>
             <Button onClick={() => setActiveProject("locationTracking")}>
              View Map
            </Button>
          </Project>
          <Project>
            <h3>Call Detail Record Generator</h3>
            <p>
              Built a web interface with Django to generate CDR data based on
              previous records.
            </p>
             <Button onClick={() => setActiveProject("cdrGenerator")}>
              Example
            </Button>
          </Project>
          <Project>
            <h3>Skin Cancer Detection</h3>
            <p>
              Used CNNs for detecting skin cancer. Focused on robust data
              preprocessing and model evaluation.
            </p>
              <Button onClick={() => setActiveProject("skinCancerDetection")}>
              Example
            </Button>
          </Project>
          <Project>
            <h3>NER System with SpaCy</h3>
            <p>
              Implemented an NLP-based system with retraining capabilities for
              custom data models.
            </p>
            <Button onClick={() => setActiveProject("nerSystem")}>
              Result
            </Button>
          </Project>
          <Project>
          <h3>AI Chatbot</h3>
<p>
  Fine-tune AI models on your custom data to enhance customer support or automate tasks with an intelligent chatbot.
</p>
 <Button onClick={() => setActiveProject("aiChatbot")}>
              View Demo
            </Button>
            
          </Project>
        </Projects>
        {activeProject && (
          <PopupOverlay>
            <PopupBox>
              <CloseButton onClick={closePopup}>&times;</CloseButton>
              <h3>{activeProject.replace(/([A-Z])/g, " $1")}</h3>
              <p>{projectDemos[activeProject]}</p>
              <DemoImage src={imagedemo[activeProject]} alt={`${activeProject} Demo`} />

            </PopupBox>
          </PopupOverlay>
        )}
      </Section>

      <Section>
        <h2>Education</h2>
        <Timeline>
          <li>
            <strong>2024:</strong> B-Tech in CSE (Data Science) - Haldia
            Institute of Technology 
          </li>
          <li>
            <strong>2019:</strong> Higher Secondary - Himalayan Public School
            
          </li>
          <li>
            <strong>2017:</strong> Secondary School - St. Paul's High School
           
          </li>
        </Timeline>
      </Section>

      <Section>
        <h2>Work Experience</h2>
        <Projects>
          <Project>
            <h3>Data Analyst  & ML/AI Intern</h3>
            <p>APT Software Avenues PVT Ltd (2023 - 2024)</p>
            <p>
              Developed a web-based app with Django and Python to analyze and
              visualize data.
            </p>
          </Project>
        </Projects>
      </Section>

      <DownloadButton as="button" onClick={handleDownload}>
  Download Resume
</DownloadButton>
    </Container>
  );
};
export default App;
const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(145deg, #16162d, #282847);
  color: white;
  padding: 30px;
  min-height: 100vh;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
`;

const MenuItem = styled.li`
  cursor: pointer;
  font-size: 18px;
  padding: 5px 10px;
  color: #d1d1d1;
  border-radius: 5px;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: white;
  }
`;

const ResumeButton = styled.button`
  background: linear-gradient(145deg, #ff7e5f, #feb47b);
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  padding: 10px 25px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(255, 126, 95, 0.4);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 16px rgba(255, 126, 95, 0.6);
  }
`;

const Header = styled.header`
  text-align: center;
  margin: 40px 0;
  color: #f1f1f1;

  h2 {
    font-size: 3rem;
    margin-bottom: 15px;
    background: linear-gradient(145deg, #ff7e5f, #feb47b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.0rem; /* Slightly larger font size */
    
    color: #ffe600; /* Use a contrasting, bright color */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8); /* Adds depth with a shadow */
    background: linear-gradient(90deg, #ff7e5f, #feb47b); /* Optional gradient background */
    padding: 10px; /* Adds space around the text */
    border-radius: 10px; /* Rounds the edges for a softer look */
    display: inline-block; /* Keeps the background tight around the text */
  }
`;

const Section = styled.section`
  margin: 0px 0;
  text-align: center;
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Single row layout */
  column-gap: 10px; /* Adjust horizontal spacing */
  row-gap: 0px; /* No vertical spacing since it's a single row */
  justify-items: center;
`;

const SkillCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(145deg, #29294d, #3b3969);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.3);
  color: white;
  width: 180px;
  text-align: center;
  overflow: hidden;
  transform: perspective(1000px);
  transition: transform 0.5s ease;

 

  p {
    font-size: 1.1rem;
  }

  &:hover {
    transform: rotateY(15deg);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.6);
  }

  &:hover .details {
    opacity: 1;
    transform: translateY(0);
  }
`;

const DetailCard = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 0.3s ease, transform 0.3s ease;
  padding: 20px;
  border-radius: 10px;
  overflow: auto;

  p {
    font-size: 1.0rem;
    line-height: 1.0;
  }
`;

const Projects = styled.div`
   display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Single row layout */
  column-gap: 10px; /* Adjust horizontal spacing */
  row-gap: 0px; /* No vertical spacing since it's a single row */
  justify-items: center;
`;

const Project = styled.div`
  background: linear-gradient(145deg, #29294d, #3b3969);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  text-align: left;

  h3 {
    margin-bottom: 10px;
    font-size: 1.4rem;
    color: #ff7e5f;
  }

  p {
    color: #ddd;
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const Timeline = styled.ul`
  list-style: none;
  padding: 0;
  color: white;

  li {
    margin-bottom: 15px;
    font-size: 1.1rem;

    span {
      color: #ff9f43;
      font-weight: bold;
    }
  }
`;

const DownloadButton = styled.button`
  background: linear-gradient(145deg, #28a745, #34d058);
  color: white;
  font-size: 18px;
  border: none;
  padding: 15px 30px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 30px;
  box-shadow: 0 4px 12px rgba(40, 167, 69, 0.5);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background: linear-gradient(145deg, #2ac760, #37d96a);
    box-shadow: 0 8px 20px rgba(40, 167, 69, 0.7);
  }
`;

const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  /* Add width and height to define the size */
  height: 200px;
  background-image: url('/images/avtar.webp'); /* Path to your background image */
  background-size: cover; /* Ensures the image covers the entire container */
  background-position: center; /* Centers the image */
  position: relative;
  border-radius: 50%; /* If you want a circular container */
`;
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  color: white;
  font-size: 24px;
  border: none;
  cursor: pointer;
`;
// const Project = styled.div`
//   background: #1f1f37;
//   border-radius: 10px;
//   padding: 15px;
//   transition: 0.3s;

//   h3 {
//     color: #feb47b;
//   }

//   p {
//     font-size: 16px;
//     color: #d1d1d1;
//     margin: 10px 0;
//   }

//   &:hover {
//     background: #282847;
//     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
//   }
// `;

const Button = styled.button`
  background: linear-gradient(145deg, #ff7e5f, #feb47b);
  border: none;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 4px 12px rgba(255, 126, 95, 0.4);
  }
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const PopupBox = styled.div`
  background: #1f1f37;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 600px;
  text-align: center;
  position: relative;
  

  h3 {
    color: #feb47b;
    margin-bottom: 10px;
  }

  p {
    color: #d1d1d1;
    margin-bottom: 20px;
  }
`;
const DemoImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
  margin-top: 10px;
  overflow: auto;
`;
