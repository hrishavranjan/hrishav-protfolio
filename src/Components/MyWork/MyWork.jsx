import React, { useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
    const [showMore, setShowMore] = useState(false);

    const handleToggle = () => {
        setShowMore(!showMore);
    };

    const projectsToShow = showMore ? mywork_data : mywork_data.slice(0, 4);

    return (
        <div id='work' className='mywork'>
            <div className="title-box">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="Theme Pattern" />
            </div>
            <div className="mywork-container">
                {projectsToShow.map((work, index) => (
                    <a key={index} href={work.link} target="_blank" rel="noopener noreferrer" className="work-item">
                        <div className="image-container">
                            <div className="white-box">
                                <img src={work.w_img} alt={work.w_name || "Project Image"} />
                            </div>
                            <p className="hover-text">{work.w_name}</p>
                        </div>
                    </a>
                ))}
            </div>
            {mywork_data.length > 4 && (
                <div className="mywork-showmore" onClick={handleToggle}>
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

export default MyWork;
