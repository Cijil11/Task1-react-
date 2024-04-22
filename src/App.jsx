import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleButtonClick = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor }}>
      <h1 style={{align:'center'}}><b> "Color Changer"</b></h1>
      <div className='p'>
      <button onClick={() => handleButtonClick('red')}>Red</button><br />
      <button onClick={() => handleButtonClick('blue')}>Blue</button><br />
      <button onClick={() => handleButtonClick('green')}>Green</button><br />
      <button onClick={() => handleButtonClick('orange')}>Orange</button><br />
      <button onClick={() => handleButtonClick('yellow')}>Yellow</button><br />
      <button onClick={() => handleButtonClick('purple')}>Purple</button>
</div>

    </div>
  );
}

export default App;