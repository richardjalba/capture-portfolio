import { React } from 'react';
import home1 from '../img/home1.jpg';

const AboutSection = () => {
  return (
    <div>
      <div className='description'>
        <div className='title'>
          <div className='hide'>
            <h2>This is a</h2>
          </div>
          <div className='hide'>
            <h2>
              new <span>React</span> website
            </h2>
          </div>
          <div className='hide'>
            <h2>that I'm building.</h2>
          </div>
        </div>
        <p>
          This is a random project for me to practice my random react skills!
        </p>
        <button>View my Portfolio</button>
      </div>
      <div className='image'>
        <img src={home1} alt='fancy pastry' />
      </div>
    </div>
  );
};

export default AboutSection;
