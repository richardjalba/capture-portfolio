import { React } from 'react';
import home1 from '../img/home1.jpg';
import styled from 'styled-components';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className='title'>
          <Hide>
            <h2>This is a</h2>
          </Hide>
          <Hide>
            <h2>
              new <span>React</span> website
            </h2>
          </Hide>
          <Hide>
            <h2>that I'm building.</h2>
          </Hide>
        </div>
        <p>
          This is a random project for me to practice my random react skills!
        </p>
        <button>View my Portfolio</button>
      </Description>
      <Image>
        <img src={home1} alt='fancy pastry' />
      </Image>
    </About>
  );
};

// Styled Component
const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    height: 80vh;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
