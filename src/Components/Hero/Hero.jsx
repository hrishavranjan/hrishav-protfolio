import React, { useEffect, useState } from 'react';
import './Hero.css';
import profile_img from '../../assets/profile.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  // State to control animation
  const [animate, setAnimate] = useState(false);

  // Function to open the resume in a new tab
  const viewResume = () => {
    const resumeLink = 'YOUR_GOOGLE_DRIVE_LINK_HERE'; // Replace with your Google Drive link
    window.open(resumeLink, '_blank'); // Open the link in a new tab
  };

  // Reset animation on component mount
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Profile" className='profile-img' />
      <h1 className={animate ? 'animate' : ''}>
        <span>I'm Hrishav Ranjan :)</span>
      </h1>
      <h2>a developer in India.</h2>
      <p>I am a developer from Bhubaneshwar, India with 1 Year Experience</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume" onClick={viewResume}>
          My resume
        </div>
      </div>
    </div>
  );
}

export default Hero;
