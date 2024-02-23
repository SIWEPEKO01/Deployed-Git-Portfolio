import React from 'react';
import './About.css';
import { FaPaperPlane, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import peko from '../components/images/siwe1.png';

const About = () => {
    return (
        <section id="about-section">
            {/* about left  */}
            <div className="about-left">
                <img src={peko} alt="About Img"/>
            </div>

            {/* about right  */}
            <div className="about-right">
             
                <h1>About Me</h1>
                <p>Passionate hiker, gym enthusiast, and avid programmer with a National Diploma in Information Technology from Walter Sisulu University.<br/>Worked at CapaCiti UVU Africa and now serving as a Junior Software Developer at ABSA Younglings.<br/>Balancing creativity through music, cooking, and baking,<br/>and enjoying social activities like table pool games and networking events for personal and professional growth.</p>
                <div className="address">
                    <ul>
                        <li>
                            <span className="address-logo">
                                <FaPaperPlane />
                            </span>
                            <p>Address</p>
                            <span className="saprater">:</span>
                            <p>Cape Town, South Africa</p>
                        </li>
                        <li>
                            <span className="address-logo">
                               
                            </span>
                           
                        </li>
                        <li>
                            <span className="address-logo">
                                <FaEnvelope />
                            </span>
                            <p>Email ID</p>
                            <span className="saprater">:</span>
                            <p>siwepeko@gmail.com</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
