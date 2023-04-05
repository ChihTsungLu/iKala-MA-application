import React from 'react'
import './cta.css';
const cta = () => {
  return (
    <div className="gpt3__cta">
      <div className="gpt3__cta-content">
        <h3>Nikki Huang ( Taiwan Uniqlo Product Marketing Manager ) 
          <a href="mailto:nikki.huang@fastretailing.com " class="contact-button"> Email </a> and <a href="https://www.linkedin.com/in/nikki-huang-23060069/" target="_blank">LinkedIn </a>
         links
        </h3>
        <h3>Po-Han Chiu ( Taiwan Uniqlo Senior Digital Marketing Manager ) 
          <a href="mailto:po-han.peter@fastretailing.com" class="contact-button"> Email </a> and <a href="https://www.linkedin.com/in/peterpohanchiu/" target="_blank">LinkedIn </a>
         links
        </h3>
      </div>
      <div className="gpt3__cta-btn">
        <a href="https://drive.google.com/file/d/1YCaNmSFbFcOQ45SIdXU51AdxD94_Pud3/view?usp=sharing" target="_blank">Sales Email Example</a>
      </div>
    </div>
  )
}

export default cta