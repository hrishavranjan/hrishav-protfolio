import React, { useState } from 'react';
import './Skills.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  const [showMore, setShowMore] = useState(false); // State to toggle between more/less services

  const handleToggle = () => {
    setShowMore(prevState => !prevState); // Toggle state
  };

  // Determine how many services to show
  const servicesToShow = showMore ? Services_Data : Services_Data.slice(0, 4);

  return (
    <div id='services' className='services'>
      <div className="title-box">
        <h1>My Skills</h1>
        <img src={theme_pattern} alt="Theme Pattern" /> {/* Added alt text for accessibility */}
      </div>
      <div className="services-container">
        {servicesToShow.map((service, index) => (
          <div 
            key={index} 
            className='services-format' 
            onClick={() => window.open(service.link.href || service.link, '_blank')} // Open link in a new tab
          >
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
          </div>
        ))}
      </div>
      {Services_Data.length > 4 && ( // Only show the toggle button if there are more than 4 services
        <div className="services-showmore" onClick={handleToggle}>
          <p>{showMore ? "Show Less" : "Show More"}</p>
          <img
            src={arrow_icon}
            alt="Toggle"
            style={{ transform: showMore ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </div>
      )}
    </div>
  );
};

export default Services;
