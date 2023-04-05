import React from 'react'
import './header.css'
import people from '../../assets/people.png';
import ai from '../../assets/self.jpg';
const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          CDP Sales MA Application by Chih Tsung Lu
        </h1>
        <h2 >Table of Content</h2>
        <ul>
          <li><a href="#wgpt3">Research Client Pain Points </a></li>
          <li><a href="#features">Target Audience - Uniqlo</a></li>
          <li><a href="#possibility">Business Proposal & Client Contact Info</a></li>
          {/* <li><a href="#blog">Call To Action</a></li> */}
        </ul>

        <div className="gpt3__header-content__input">
          <a href="mailto:lu001224@email.com" class="contact-button">Further discussion with me</a>
        </div>
        
      </div>
      
      <div className="gpt3__header-image">
        <img src={ai} alt="ai"/>
        <p>I am Chih Tsung Lu, a fresh but motivated graduate with experience working in marketing project and start-up. To highlight my potential as an asset to iKala, I'd like to demonstate my business development skill and great passion for solving customers' problems by this preliminary report that provides initail findings.</p>
      </div>
    </div>
  )
}

export default Header