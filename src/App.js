import React, { useRef, useEffect } from 'react';
import './App.css';

function App() {


  const earthRef = useRef({ current: undefined })
  const marsRef = useRef({ current: undefined })
  const rocketRef = useRef({ current: undefined })

  useEffect(() => {
    earthRef.current.animate(
      [
        { left: '50%' },
        { left: '-250%' }
      ],
      {
        duration: 4000,
        fill: 'forwards',
        easing: 'ease-in-out',
      })

    marsRef.current.animate(
      [
        { left: '250%' },
        { left: '50%' }
      ],
      {
        duration: 4000,
        fill: 'forwards',
        easing: 'ease-in-out',
      })



    rocketRef.current.animate(
      [
        { transform: 'rotateZ(0)', offset: 0 },
        { transform: 'rotateZ(90deg)  scale(2)', offset: 0.5 },
        { transform: 'rotateZ(90deg)  scale(1.5)', offset: 0.75 },
        { transform: 'rotateZ(0)', offset: 1 },
      ],
      {
        duration: 4000,
        fill: 'forwards',
        easing: 'ease-in-out',
      })






  }, [])

  const goToMar = () => {
    alert('Bye Bye')
  }
  return (
    <div className="App">
      <img ref={earthRef} id="earth" src="https://black-holes-interactives.onlea.org/escapeVelocity/assets/images/earth.svg" srcSet="https://black-holes-interactives.onlea.org/escapeVelocity/assets/images/earth.svg 2x" alt="Earth" title="Planet Earth" />

      <img ref={marsRef} id="mars" src="https://black-holes-interactives.onlea.org/escapeVelocity/assets/images/mars.svg" srcSet="https://black-holes-interactives.onlea.org/escapeVelocity/assets/images/mars.svg 2x" alt="Mars" title="Planet Mars" />


      <div ref={rocketRef} className='rocket'>
        <img id="flame" src="https://black-holes-interactives.onlea.org/escapeVelocity/assets/images/rocket-flame.svg" srcSet="https://black-holes-interactives.onlea.org/escapeVelocity/assets/images/rocket-flame.svg 2x" alt="" title="Starship" />
        <img id="rocket-body" src="https://black-holes-interactives.onlea.org/escapeVelocity/assets/images/rocket.svg" srcSet="https://black-holes-interactives.onlea.org/escapeVelocity/assets/images/rocket.svg 2x" alt="" title="Starship" />
      </div>

      <button onClick={goToMar}>Let's Go</button>


    </div>
  );
}

export default App; 
