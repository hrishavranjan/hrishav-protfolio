import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaNodeJs, FaJava, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiBootstrap, SiMysql, SiTailwindcss, SiDocker, SiKubernetes, SiJquery } from 'react-icons/si';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am a third-year B.Tech Computer Science student at KIIT, passionately immersed in the world of coding.</p>
            <p>My love for programming drives me to explore new technologies and solve complex problems. With each line of code, I find a unique joy and fulfillment, constantly honing my skills and embracing the challenges of this ever-evolving field.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><FaHtml5 size={40} /><p>HTML</p></div>
            <div className="about-skill"><FaCss3Alt size={40} /><p>CSS</p></div>
            <div className="about-skill"><FaJs size={40} /><p>JavaScript</p></div>
            <div className="about-skill"><FaReact size={40} /><p>React JS</p></div>
            <div className="about-skill"><SiNextdotjs size={40} /><p>Next JS</p></div>
            <div className="about-skill"><FaNodeJs size={40} /><p>Node JS</p></div>
            <div className="about-skill"><FaGitAlt size={40} /><p>Git</p></div>
            <div className="about-skill"><SiMongodb size={40} /><p>MongoDB</p></div>
            <div className="about-skill"><SiBootstrap size={40} /><p>Bootstrap</p></div>
            <div className="about-skill"><SiMysql size={40} /><p>MySQL</p></div>
            <div className="about-skill"><SiTailwindcss size={40} /><p>Tailwind CSS</p></div>
            <div className="about-skill"><SiDocker size={40} /><p>Docker</p></div>
            <div className="about-skill"><SiKubernetes size={40} /><p>Kubernetes</p></div>
            <div className="about-skill"><SiJquery size={40} /><p>jQuery</p></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>0+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <a href="https://leetcode.com/hrishavranjan" target="_blank" rel="noopener noreferrer">
            <h1>100+</h1>
            <p>LEET CODE Questions</p>
          </a>
        </div>
      </div>
      <div className="social-media">
        <a href="https://www.instagram.com/rishavranjan__/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="fa-icon" />
        </a>
        <a href="https://github.com/hrishavranjan" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="fa-icon" />
        </a>
        <a href="https://www.linkedin.com/in/hrishav-ranjan-6b358a254/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
        </a>
        <a href="https://www.youtube.com/@theinfinity2001" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} className="fa-icon" />
        </a>
      </div>
    </div>
  );
};

export default About;
