import { React } from 'react';
import home1 from '../img/home1.jpg';
import { Basic, Description, Hide, Image } from '../styles';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const container = {
    hidden: { x: 100 },
    show: { x: 0, transition: { duration: 1 } },
  };

  return (
    <Basic>
      <Description>
        <motion.div
          variants={container}
          initial='hidden'
          animate='show'
          className='title'
        >
          <Hide>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
            >
              Welcome to my
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 2 } }}
            >
              <span>React</span> portfolio
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 2 } }}
            >
              project.
            </motion.h2>
          </Hide>
        </motion.div>
        <p>This project shows some of my react skills!</p>
        <button>View my Portfolio</button>
      </Description>
      <Image>
        <img src={home1} alt='fancy pastry' />
      </Image>
    </Basic>
  );
};

export default AboutSection;
