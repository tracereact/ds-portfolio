import React, { useEffect, useState } from 'react';
import '../styles/components/welcome.css';

const Welcome = () => {
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(0);
  const [introFinished, setIntroFinished] = useState(false);

  const intro = [
    'Welcome',
    'I am Diamond Spratling',
    'And this is my life...',
    '',
  ];

  const outro = 'Find out more below';

  useEffect(() => {
    if (!introFinished) {
      const messageNode = document.getElementById('fade');

      // Fade in and out
      messageNode.className = 'in-out';
      setMessage(intro[count]);

      if (count < intro.length - 1) {
        messageNode.addEventListener('animationend', () => {
          messageNode.className = '';
          setCount(count + 1);
        });
      } else {
        setIntroFinished(true);
      }
    }
  }, [count]);

  useEffect(() => {
    if (introFinished) {
      const messageNode = document.getElementById('fade');

      // Fade in only
      messageNode.className = 'in';
      setMessage(outro);
      messageNode.addEventListener('animationend', () => {
        messageNode.className = 'done'; // Fade is finished
        // Start arrow animations
      });
    }
  }, [introFinished]);

  return (
    <div className="container">
      <div id="fade">{message}</div>
      <div id="arrows">
        <i className="1 fa-solid fa-chevron-down" />
        <i className="2 fa-solid fa-chevron-down" />
        <i className="3 fa-solid fa-chevron-down" />
      </div>
    </div>
  );
};

export default Welcome;
