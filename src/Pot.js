import React from 'react'
import './pot.css'

function Pot() {

     const [startPour, setStartPour] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);

  const startAnimation = () => {
    setStartPour(true);
    setShowGreeting(false);
  };
  return (
    <div>
          <div className="pongal-container">
      {/* Pot */}
      <img src={pot} alt="Pongal Pot" className="pot" />

      {/* Milk */}
      {startPour && (
        <img
          src={milk}
          alt="Milk"
          className="milk"
          onAnimationEnd={() => setShowGreeting(true)}
        />
      )}

      {/* Button */}
      <button className="start-btn" onClick={startAnimation}>
        Start Pongal
      </button>

      {/* Greeting */}
      {showGreeting && (
        <h1 className="greeting">🎉 Happy Pongal 🎉</h1>
      )}
    </div>
    </div>
  )
}

export default Pot
