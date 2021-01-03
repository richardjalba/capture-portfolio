import { React } from 'react';
// Animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const Contact = () => {
  return (
    <motion.div
      style={{ background: 'rgb(40, 55, 100)' }}
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <h1>Contact Me</h1>
    </motion.div>
  );
};

export default Contact;
