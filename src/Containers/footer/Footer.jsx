import React from 'react'
import './footer.css'
import iKalaLogo from '../../assets/iKala.png'
const footer = () => {
  return (
    <div className="gpt3__footer section__padding" id="blog">
      <div>
        <div className="gpt3__footer-heading">
          <h2>Thank you for reading this preliminary report. I'd love a deep talk with you.</h2>
        </div>

        <div className="gpt3__footer__input">
          <a href="mailto:lu001224@email.com" >Further discussion with me</a>
        </div>

        <div className="gpt3__footer-copyright">
          <p>© 2023 Developed by Chih Tsung Lu for iKala MA application. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default footer