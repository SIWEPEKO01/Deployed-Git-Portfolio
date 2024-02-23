import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Analytics.css';
import web from '../components/images/website.png';
import bank from '../components/images/online-banking-apps-fbi-warning.jpg';

const Projects = () => {
    return (
        <div>
            <div className="section_container">
                <div className="Project_section">
                    <div className="Project_head">
                        <h2>My <span>Projects</span></h2>
                        <p>These are my projects  </p>
                    </div>
                </div>
            </div>
            <div className="projects-container">
                <h1 className=""></h1>
            </div>
            <div className="flip1-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className="profile-image">
                            <img className="we" alt='web' src={web} />
                            <div className="name"></div>
                        </div>
                        <p className="description">collaborated on a website development.</p>
                    </div>
                    <div className="flip-card-back">
                        <div className="description">
                            <img src={web} alt="Project Image" style={{ width: '100%', height: '100%' }} />
                            <p>collaborated on a website development..</p>
                        </div>
                        <div className="socialbar">
                            <a href="https://rainbow-fudge-46fcab.netlify.app/#" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="3x" />
                            </a>
                            {/* Add other social icons as needed */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects-container">
                <h1 className=""></h1>
            </div>
            <div className="flip2-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className="profile-image">
                            <img className="peko" alt='web' src={bank} style={{ width: '100%', height: '100%' }} />
                            <div className="name"></div>
                        </div>
                        <p className="description"></p>
                    </div>
                    <div className="flip-card-back">
                        <div className="description">
                            <img src={bank} alt="Project Image" style={{ width: '100%', height: '100%' }} />
                            <p></p>
                        </div>
                        <div className="socialbar">
                            <a href="https://github.com/SIWEPEKO01/banking-app" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="3x" />
                            </a>
                            {/* Add other social icons as needed */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
