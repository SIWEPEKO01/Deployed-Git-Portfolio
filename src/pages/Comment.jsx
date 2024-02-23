import React from 'react';
import './Comment.css';

const Skills = () => {
    return (
        <div>
           

            <div className="section_container">
                <div className="skills_section">
                    <div className="skills_head">
                        <h2>My <span>Skills</span></h2>
                        <p>Here are my skills to represent my Expertise</p>
                    </div>

                    <h2 className='Frontend'>Frontend</h2>

                    <div className="skills_main">
                        <div className="skill_bar">
                            <div className="info">
                                <p>HTML</p>
                                <p>90%</p>
                            </div>
                            <div className="bar">
                                <span className="html"></span>
                            </div>
                        </div>
                        <div className="skill_bar">
                            <div className="info">
                                <p>CSS</p>
                                <p>85%</p>
                            </div>
                            <div className="bar">
                                <span className="css"></span>
                            </div>
                        </div>
                        <div className="skill_bar">
                            <div className="info">
                                <p>JavaScript</p>
                                <p>80%</p>
                            </div>
                            <div className="bar">
                                <span className="js"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section_container">
                <div className="backend_skills_section">
                    <h2 className='Backend'>Backend Progress Bars</h2>
                    <div className="skills_main">
                        <div className="skill_bar">
                            <div className="info">
                                <p>Java</p>
                                <p>75%</p>
                            </div>
                            <div className="bar">
                                <span className="java"></span>
                            </div>
                        </div>
                        <div className="skill_bar">
                            <div className="info">
                                <p>Python</p>
                                <p>70%</p>
                            </div>
                            <div className="bar">
                                <span className="python"></span>
                            </div>
                        </div>
                        <div className="skill_bar">
                            <div className="info">
                                <p>Node.js</p>
                                <p>85%</p>
                            </div>
                            <div className="bar">
                                <span className="nodejs"></span>
                            </div>
                        </div>
                        <div className="skill_bar">
                            <div className="info">
                                <p>React</p>
                                <p>80%</p>
                            </div>
                            <div className="bar">
                                <span className="react"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section_container">
                <div className="database_skills_section">
                    <h2 className='Database'>Database Progress Bars</h2>
                    <div className="skills_main">
                        <div className="skill_bar">
                            <div className="info">
                                <p>SQL</p>
                                <p>80%</p>
                            </div>
                            <div className="bar">
                                <span className="sql"></span>
                            </div>
                        </div>
                        <div className="skill_bar">
                            <div className="info">
                                <p>Oracle</p>
                                <p>75%</p>
                            </div>
                            <div className="bar">
                                <span className="oracle"></span>
                            </div>
                        </div>
                        <div className="skill_bar">
                            <div className="info">
                                <p>PostgreSQL</p>
                                <p>70%</p>
                            </div>
                            <div className="bar">
                                <span className="postgresql"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;



