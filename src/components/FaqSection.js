import { React } from 'react';
import styled from 'styled-components';
import { Basic } from '../styles';

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Frequently Asked<span>Questions</span>
      </h2>
      <div className='question'>
        <h4>Why did you get into programming?</h4>
        <div className='answer'>
          <p>
            Originally I worked in sales, but I knew this wasn't something I
            wanted to do for a living. I'm naturally introverted and I always
            found myself tired after interacting with many people. Originally I
            took an Excel course to see if I could get a data entry job. The
            course reminded me of some coding I did for fun a few years back. So
            I went online and found FreeCodeCamp and the rest is history.
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
      <div className='question'>
        <h4>How did you teach yourself to code?</h4>
        <div className='answer'>
          <p>
            Originally I started at FreeCodeCamp, but when I got to JavaScript I
            started having trouble. That's when I purchased a course for
            JavaScript, and that's when things started to get rolling. I had a
            few slip-ups, and still do, when I would go through tutorials
            thinking I learned something but didn't. Eventually I figured out
            how to learn and I went from there.
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
      <div className='question'>
        <h4>What's the roadmap you recommend for new programmers?</h4>
        <div className='answer'>
          <p>
            HTML and CSS, JavaScript Fundamentals, JavaScript DOM, Algorithms,
            Node with Express and MongoDB, React.
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
      <div className='question'>
        <h4>What do you plan on learning next?</h4>
        <div className='answer'>
          <p>
            It's obvious to me that VR is the future. So I'll be learning C# for
            Unity. We'll see what the future brings.
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
    </Faq>
  );
};

const Faq = styled(Basic)`
  display: block;
  span {
    display: block;
  }
  h2 {
    font-weight: lighter;
    padding-bottom: 2rem;
  }
  .faq-line {
    background: white;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100% auto;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
