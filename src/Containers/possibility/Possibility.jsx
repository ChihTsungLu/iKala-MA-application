import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/cdp-01-feature.png'
const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility"></img>
      </div>
      <div className="gpt3__possibility-content">
        <button>Solve Uniqlo Pain Points with iKala CDP</button>
        <h2>Feature</h2>
        <p>Comprehensive customer journey tracking and boost long-term customer loyalty with tailor-made AI and Cloud Infrastructure for Enterprise</p>
        <h2>Advantage</h2>
        <p>AI-driven solution that can seamlessly replace the current solution and analyze millions of website signals and customer data points, using advanced machine learning models to provide real-time recommendations and predictions</p>
        <h2>Benefit</h2>
        <p>Integrating multichannel data into an intutive data platform with automatic customer tagging and built-in BI system to help Uniqlo achieve better ROAS and bring down marketing cost.</p>
      </div>
    </div>
  )
}

export default Possibility