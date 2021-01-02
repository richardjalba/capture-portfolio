import { React } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// img
import work1 from '../img/work1.png';
import work2 from '../img/work2.png';

const Work = () => {
  return (
    <StyledWork>
      <h1>Developer Work History</h1>

      <Movie>
        <h2>Front End Web Developer</h2>
        <h3>H2 Marketing Consultants</h3>
        <div className='line'></div>
        <Link to='/work/work-1'>
          <img src={work1} alt='H2 Marketing Consultants' />
        </Link>
      </Movie>

      <Movie>
        <h2>Unity VR/AR Developer</h2>
        <h3>Cinnamon Roll Studios</h3>
        <div className='line'></div>
        <Link to='/work/work-2'>
          <img src={work2} alt='H2 Marketing Consultants' />
        </Link>
      </Movie>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default Work;
