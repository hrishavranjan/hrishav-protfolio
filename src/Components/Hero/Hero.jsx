import React, { useEffect, useState } from 'react';
import './Hero.css';
import profile_img from '../../assets/profile.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  const [animate, setAnimate] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
  'A Web Developer.....',
  'A Web3 Enthusiast....',
  'A Cloud Engineer.....',
  'A UI/UX Designer......',
  'A Full Stack Developer......',
  'An AI/ML Practitioner......',
  'A Problem Solver......',
  'A Tech Enthusiast......'
];

  const typingSpeed = 100;
  const deletingSpeed = 60;
  const delayBetweenRoles = 1500;

  const viewResume = () => {
    const resumeLink = 'YOUR_GOOGLE_DRIVE_LINK_HERE';
    window.open(resumeLink, '_blank');
  };

  useEffect(() => {
    setAnimate(true);
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex <= currentRole.length) {
      setDisplayedText(currentRole.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex(charIndex + 1), typingSpeed);
    } else if (isDeleting && charIndex >= 0) {
      setDisplayedText(currentRole.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex(charIndex - 1), deletingSpeed);
    } else {
      if (!isDeleting) {
        timeout = setTimeout(() => setIsDeleting(true), delayBetweenRoles);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setCharIndex(0);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Profile" className='profile-img' />
      <h1 className={animate ? 'animate' : ''}>
        <span>I'm Hrishav Ranjan :)</span>
      </h1>
      <h2>{displayedText}<span className="cursor">|</span></h2>
      <p>
        I am a final-year B.Tech Computer Science student at KIIT, Bhubaneswar, with over 4 years of experience in building responsive websites, decentralized apps, cloud systems, and user-friendly interfaces.
      </p>
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
};

export default Hero;
