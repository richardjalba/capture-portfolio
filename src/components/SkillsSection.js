import { React } from 'react';
import home2 from '../img/home2.jpg';

const SkillsSection = () => {
  return (
    <div className='skills'>
      <div className='description'>
        <h2>
          My <span>Skill</span> Stack
        </h2>
        <div className='cards'>
          <div className='card'>
            <div className='icon'>
              <img
                src='https://png.pngitem.com/pimgs/s/206-2069813_file-css-and-html-css-logo-svg-hd.png'
                alt='html css logos'
              />
              <h3>HTML/CSS</h3>
            </div>
            <p>The markdown languages.</p>
          </div>
          <div className='card'>
            <div className='icon'>
              <img
                src='https://mpng.subpng.com/20190627/ttx/kisspng-javascript-computer-icons-scalable-vector-graphics-list-of-javascript-enhancements-fandom-developers-5d145895b06253.7824611015616144857225.jpg'
                alt='javascript logo'
              />
              <h3>JavaScript</h3>
            </div>
            <p>The gift that keeps on giving.</p>
          </div>
          <div className='card'>
            <div className='icon'>
              <img
                src='https://www.vhv.rs/dpng/d/456-4564693_vector-javascript-node-js-transparent-png-clipart-node.png'
                alt='node logo'
              />
              <h3>Node</h3>
            </div>
            <p>The server side run-time.</p>
          </div>
          <div className='card'>
            <div className='icon'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'
                alt='react logo'
              />
              <h3>React</h3>
            </div>
            <p>The framework that made this.</p>
          </div>
        </div>
      </div>
      <div className='image'>
        <img src={home2} />
      </div>
    </div>
  );
};

export default SkillsSection;
