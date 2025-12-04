import { useState, useEffect, useRef } from 'react'
import './index.css'

// Hardcoded weights from the regression model
const WEIGHTS = {
  intercept: -12105.48,
  age: 257.83,
  bmi: 321.94,
  children: 473.69,
  smoker: 23810.32
}

// Simple number animation component
const AnimatedNumber = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const requestRef = useRef();
  const startTimeRef = useRef();
  const startValueRef = useRef(value);

  useEffect(() => {
    startValueRef.current = displayValue;
    startTimeRef.current = null;

    const animate = (time) => {
      if (!startTimeRef.current) startTimeRef.current = time;
      const progress = time - startTimeRef.current;
      const duration = 500; // 0.5s animation

      if (progress < duration) {
        const easeOutQuart = 1 - Math.pow(1 - progress / duration, 4);
        const nextValue = startValueRef.current + (value - startValueRef.current) * easeOutQuart;
        setDisplayValue(nextValue);
        requestRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [value]);

  return (
    <span>
      ${displayValue.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
    </span>
  );
};

function App() {
  const [age, setAge] = useState(30);
  const [bmi, setBmi] = useState(25);
  const [smoker, setSmoker] = useState(false);
  const [children, setChildren] = useState(0);

  const calculatePremium = () => {
    let premium = WEIGHTS.intercept +
      (WEIGHTS.age * age) +
      (WEIGHTS.bmi * bmi) +
      (WEIGHTS.children * children) +
      (WEIGHTS.smoker * (smoker ? 1 : 0));

    return Math.max(0, premium); // Ensure no negative premium
  };

  const premium = calculatePremium();

  // Determine BMI color
  const getBmiColor = (val) => {
    if (val < 18.5) return '#3b82f6'; // Underweight (Blue)
    if (val < 25) return '#22c55e'; // Healthy (Green)
    if (val < 30) return '#eab308'; // Overweight (Yellow)
    return '#ef4444'; // Obese (Red)
  };

  return (
    <div className="app-container">
      <div className="card">

        {/* Left Side: Inputs */}
        <div className="inputs-section">
          <div className="header">
            <h1 className="title">RiskRate AI</h1>
            <p className="subtitle">Get your health insurance quote in seconds.</p>
          </div>

          <div className="controls">
            {/* Age Slider */}
            <div className="control-group">
              <div className="label-row">
                <label>Age</label>
                <span className="value-display">{age}</span>
              </div>
              <input
                type="range"
                min="18"
                max="65"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="slider"
              />
            </div>

            {/* BMI Slider */}
            <div className="control-group">
              <div className="label-row">
                <label>BMI</label>
                <span className="value-display" style={{ color: getBmiColor(bmi) }}>{bmi}</span>
              </div>
              <input
                type="range"
                min="15"
                max="50"
                step="0.1"
                value={bmi}
                onChange={(e) => setBmi(Number(e.target.value))}
                className="slider bmi-slider"
                style={{
                  background: `linear-gradient(to right, #3b82f6 0%, #22c55e 33%, #eab308 66%, #ef4444 100%)`
                }}
              />
              <div className="bmi-labels">
                <span>Underweight</span>
                <span>Healthy</span>
                <span>Overweight</span>
                <span>High Risk</span>
              </div>
            </div>

            {/* Children Counter */}
            <div className="control-group">
              <label>Children</label>
              <div className="counter">
                <button
                  onClick={() => setChildren(Math.max(0, children - 1))}
                  className="counter-btn"
                >
                  -
                </button>
                <span className="counter-value">{children}</span>
                <button
                  onClick={() => setChildren(children + 1)}
                  className="counter-btn"
                >
                  +
                </button>
              </div>
            </div>

            {/* Smoker Toggle */}
            <div className="toggle-group">
              <div className="toggle-info">
                <span className="toggle-label-text">Smoker</span>
                <span className="toggle-subtext">Do you smoke tobacco?</span>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={smoker}
                  onChange={(e) => setSmoker(e.target.checked)}
                />
                <span className="slider-round"></span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Side: Result */}
        <div className="result-section">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>

          <div className="result-content">
            <h2 className="result-title">Estimated Annual Premium</h2>
            <div className="premium-amount">
              <AnimatedNumber value={premium} />
            </div>
            <p className="result-subtitle">
              Based on your age, BMI, and lifestyle choices.
            </p>
          </div>

          <div className="result-actions">
            <div className="breakdown">
              <div className="breakdown-row">
                <span>Base Rate</span>
                <span className="white-text">$1,000</span>
              </div>
              <div className="breakdown-row">
                <span>Risk Factor</span>
                <span className={smoker || bmi > 30 ? 'risk-high' : 'risk-low'}>
                  {smoker || bmi > 30 ? 'High' : 'Low'}
                </span>
              </div>
            </div>

            <button className="cta-button">
              Purchase Policy
            </button>
            <p className="disclaimer">
              *This is a demo. No actual policy will be purchased.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
