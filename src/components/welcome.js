import React, { useEffect, useState } from 'react';
import '../styles/components/welcome.css';

// Fade words in
// Then show scroll botton/ bar

const Welcome = () => {
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(0);
  const [introFinished, setIntroFinished] = useState(false);

  const intro = ['Welcome', 'It is time...', 'To Rock out \\m/', ''];

  const outro = 'Find out more below';

  // let i = 0;
  // const print = () => {
  //   setTimeout(() => {
  //     console.log('hello');
  //     i += 1;

  //     if (i < phrases.length) {
  //       print();
  //     }
  //   }, 3000);
  // };

  // const printMessage = () => {
  //   // Add class to message to fade in
  //   // Check transition complete
  //   // Add class to message to fade out
  //   // Check transition complete
  //   // Go to next phrase
  //   const messageNode = document.getElementById('fade');
  //   for (let i = 0; i < phrases.length; i += 1) {
  //     messageNode.className = 'in';
  //     setMessage(phrases[i]);
  //     messageNode.innerText = 'Hello World';
  //     messageNode.addEventListener('animationend', () => {
  //       if (i < phrases.length - 1) {
  //         messageNode.className = 'out';
  //       }
  //     });
  //   }
  // };

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
      <span id="fade">{message}</span>
    </div>
  );
};

export default Welcome;
