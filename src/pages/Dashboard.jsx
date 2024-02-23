import React from 'react';
import './Dashboard.css'; 
import Thulie from '../components/images/image1.png';

const Dashboard = () => {
  return (
    <div className='home'>
      <div className="dashboard">
        <h1>Hello</h1>
        <h2>I am</h2><h2> Sithulisiwe Peko</h2>
        <p className="content">
"Passionate junior software developer with a strong foundation in coding and a keen interest in technology.
 Eager to learn, adapt, and contribute to innovative projects. 
  Proficient in insert relevant programming languages or technologies,
 with a drive for problem-solving and collaborating in a team environment."</p>
        <button className="downloadButton">Download CV</button>
      </div>
      
      <div className='Right-image-content'>
        <img className="Thulie" alt='Thulie' src={Thulie} />
      </div>
    </div>
  );
}

export default Dashboard;
