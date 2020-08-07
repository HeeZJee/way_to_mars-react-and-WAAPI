import React, { useRef, useEffect, useState } from 'react';
import './App.css';

function App() {


  const earthRef = useRef({ current: undefined })
  const marsRef = useRef({ current: undefined })
  const rocketRef = useRef({ current: undefined })
  const flameRef = useRef({ current: undefined })
  const goBtnRef = useRef({ current: undefined })
  const goBackBtnRef = useRef({ current: undefined })
  const headingRef = useRef({ current: undefined })
  const popupRef = useRef({ current: undefined })



  const [earthState, setEarthState] = useState({ current: undefined })
  const [marsState, setMarsState] = useState({ current: undefined })
  const [rocketState, setRocketState] = useState({ current: undefined })
  const [flameState, setFlameState] = useState({ current: undefined })



  useEffect(() => {


    const animateDuration = {
      duration: 6000,
      fill: 'forwards',
      easing: 'ease-in-out',
    }


    const colorKeyframes = [
      { color: 'violet', borderColor: 'violet' },
      { color: 'indigo', borderColor: 'indigo' },
      { color: 'blue', borderColor: 'blue' },
      { color: 'green', borderColor: 'green' },
      { color: 'yellow', borderColor: 'yellow' },
      { color: 'red', borderColor: 'red' },
      { color: 'violet', borderColor: 'violet' },
    ]


    const colorDuration = {
      duration: 1000,
      iterations: Infinity,
    }


    const animateEarth = earthRef.current.animate(
      [
        { left: '50%' },
        { left: '-250%' }
      ], animateDuration
    )


    const animateMars = marsRef.current.animate(
      [
        { left: '250%' },
        { left: '50%' }
      ], animateDuration
    )


    const animateRocket = rocketRef.current.animate(
      [
        { transform: 'rotateZ(45deg)', top: '75px', offset: 0.1 },
        { transform: 'rotateZ(90deg)  scale(2)', offset: 0.5 },
        { transform: 'rotateZ(90deg)  scale(1.5)', offset: 0.75 },
        { transform: 'rotateZ(0)', top: '150px' },
      ], animateDuration
    )


    const animateFlame = flameRef.current.animate(
      [
        { visibility: 'visible', height: "70px", offset: 0.01 },
        { visibility: 'visible', height: "70px", offset: 0.99 },
      ],
      {
        duration: animateRocket.effect.getComputedTiming().duration - 1000,
        fill: 'forwards',
        easing: 'ease-in-out',
      }
    )



    goBtnRef.current.animate(
      colorKeyframes,
      colorDuration
    )


    goBackBtnRef.current.animate(
      colorKeyframes,
      colorDuration
    )

    headingRef.current.animate(
      colorKeyframes,
      colorDuration
    )

    popupRef.current.animate(
      colorKeyframes,
      colorDuration
    )


    setEarthState(animateEarth)
    setMarsState(animateMars)
    setRocketState(animateRocket)
    setFlameState(animateFlame)

    animateEarth.pause()
    animateMars.pause()
    animateRocket.pause()
    animateFlame.pause()


  }, [setEarthState])

  const goToMar = () => {
    earthState.play()
    marsState.play()
    rocketState.play()
    flameState.play()
    headingRef.current.style.visibility = 'hidden'
    goBtnRef.current.style.visibility = 'hidden'
    setInterval(() => goBackBtnRef.current.style.visibility = 'visible', earthState.effect.getComputedTiming().duration)
  }

  const goBack = () => {
    popupRef.current.style.visibility = 'visible'
  }
  return (
    <div className="App">
      <h1 ref={headingRef}>Way to Mars</h1>
      <img ref={earthRef} id="earth" src="https://black-holes-interactives.onlea.org/escapeVelocity/assets/images/earth.svg" srcSet="https://black-holes-interactives.onlea.org/escapeVelocity/assets/images/earth.svg 2x" alt="Earth" title="Planet Earth" />

      <img ref={marsRef} id="mars" src="https://black-holes-interactives.onlea.org/escapeVelocity/assets/images/mars.svg" srcSet="https://black-holes-interactives.onlea.org/escapeVelocity/assets/images/mars.svg 2x" alt="Mars" title="Planet Mars" />


      <div ref={rocketRef} className='rocket'>
        <img id="flame" ref={flameRef} src="https://black-holes-interactives.onlea.org/escapeVelocity/assets/images/rocket-flame.svg" srcSet="https://black-holes-interactives.onlea.org/escapeVelocity/assets/images/rocket-flame.svg 2x" alt="" title="Starship" />
        <img id="rocket-body" src="https://black-holes-interactives.onlea.org/escapeVelocity/assets/images/rocket.svg" srcSet="https://black-holes-interactives.onlea.org/escapeVelocity/assets/images/rocket.svg 2x" alt="" title="Starship" />
      </div>
      <p ref={popupRef} className='pop-up'> Oooooops! Unfortunately, it's an one way trip. XD</p>

      <button ref={goBtnRef} onClick={goToMar} className='go-btn'>Let's Go</button>
      <button ref={goBackBtnRef} onClick={goBack} className='go-back-btn'>Go Back Home</button>

    </div>
  );
}

export default App; 
