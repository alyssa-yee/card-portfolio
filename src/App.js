import './App.css';
import { useState } from 'react';

function App() {
  const [isFlipped, setIsFlipped] = useState(false); //default false
  const handleCardClick = () => {
    setIsFlipped(!isFlipped); // not false => setIsFlipped state is set to true.
  };

  return (
    <div className="App" onClick={handleCardClick}>
      <div className={`flip-card ${isFlipped ? 'rotate-flip' : ''}`}>

        <div className="flip-card-front">
        <div className='signature'></div>
        </div>

        <div className = "flip-card-back">
          <div className='profile-pic'></div>
          <div className='name'></div>
          <div className='links'></div>
          <div className='paragraph'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
