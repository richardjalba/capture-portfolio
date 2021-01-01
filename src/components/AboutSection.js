import { React } from 'react';
import home1 from '../img/home1.jpg';
import { Basic, Description, Hide, Image } from '../styles';

const AboutSection = () => {
  return (
    <Basic>
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
        <p>This is a random project for me to practice react skills!</p>
        <button>View my Portfolio</button>
      </Description>
      <Image>
        <img src={home1} alt='fancy pastry' />
      </Image>
    </Basic>
  );
};

export default AboutSection;
