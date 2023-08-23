import './App.css';
import { useState } from 'react';

function App() {
  const [isFlipped, setIsFlipped] = useState(false); //default false

  const handleCardClick = () => {
    setIsFlipped(!isFlipped); // not false => setIsFlipped state is set to true.
  };
  
  const handleButtonClick = (e) => {
    e.stopPropagation(); // Prevent the click event from bubbling up
  };

  return (
    <div className="App" onClick={handleCardClick}>
      <div className={`flip-card ${isFlipped ? 'rotate-flip' : ''}`}>

        <div className="flip-card-front">
        <div className='signature'></div>
        </div>

        <div className="flip-card-back">
          <div className='profile-pic'></div>

          <div className='name-div'><span id='name'>ALYSSA YEE</span></div>

          <div className='links'>
            <div className='info-div'>
            <span className='info-text'>alyssaqyee@outlook.com</span>
            <span className='info-text'>(520)-208-7560</span>
            </div>
            <div className='buttons-div'>
            <button className='buttons' onClick={handleButtonClick}>test</button>
            <button className='buttons' onClick={handleButtonClick}>test</button>
            </div>
          </div>

          <div className='paragraph'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
