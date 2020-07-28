import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <img id="earth" src="https://black-holes-interactives.onlea.org/escapeVelocity/assets/images/earth.svg" srcSet="https://black-holes-interactives.onlea.org/escapeVelocity/assets/images/earth.svg 2x" alt="Earth" title="Planet Earth" />

      <img id="mars" src="https://black-holes-interactives.onlea.org/escapeVelocity/assets/images/mars.svg" srcSet="https://black-holes-interactives.onlea.org/escapeVelocity/assets/images/mars.svg 2x" alt="Mars" title="Planet Mars" />


      <div class='rocket'>

        <img id="flame" src="https://black-holes-interactives.onlea.org/escapeVelocity/assets/images/rocket-flame.svg" srcSet="https://black-holes-interactives.onlea.org/escapeVelocity/assets/images/rocket-flame.svg 2x" alt="" title="Starship" />
        <img id="rocket-body" src="https://black-holes-interactives.onlea.org/escapeVelocity/assets/images/rocket.svg" srcSet="https://black-holes-interactives.onlea.org/escapeVelocity/assets/images/rocket.svg 2x" alt="" title="Starship" />
      </div>


    </div>
  );
}

export default App; 
