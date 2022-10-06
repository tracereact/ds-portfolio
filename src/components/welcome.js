import React, { useEffect } from 'react';
import '../styles/components/welcome.css';

// Fade words in
// Then show scroll botton/ bar

const Welcome = () => {
  // const [message, setMessage] = useState('');

  // const phrases = [
  //   'Welcome',
  //   'It is time...',
  //   'To Rock out \\m/',
  // ];

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

  const printMessage = () => {
    // Add class to message to fade in
    // Check transition complete
    // Add class to message to fade out
    // Check transition complete
    // Go to next phrase

    const messageNode = document.getElementById('fade');
    messageNode.className = 'in';

    messageNode.innerText = 'Hello World';
    messageNode.addEventListener('animationend', () => {
      messageNode.className = 'out';
    });
  };

  useEffect(() => {
    document.addEventListener('load', printMessage());

    return () => {
      document.removeEventListener('load', printMessage());
    };
  }, []);

  return (
    <div className="container">
      <span id="fade" />
    </div>
  );
};

export default Welcome;
