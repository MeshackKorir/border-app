import React from 'react';
import Footer from './Footer';
import './About.css';

const About = () => {
  return (
    <div className='about-page'>
      <div className='headers'>
       <h6>Who We Are</h6>
       <h1 className='team-header'>Our Team</h1>
      </div>
      <p className='team-description'>
        Our long history of unparalleled commitment to partnering with the most extensive carriers and our ability to offer the most versatile services.
      </p>

      <div className='about-card-container'>
        {/* First Card */}
        <div className='about-card'>
          <img src='https://i.pinimg.com/736x/71/58/b5/7158b594996b04abe0487cb82438d14d.jpg' alt='team member' />
          <div className='about-card-content'>
            <h2>Darryl Rogers</h2>
            <p>Company's Director</p>
            <p>Expert in automotive delivery of tires, spare parts, and accessories to warehouses and recipients.</p>
          </div>
        </div>

        {/* Second Card */}
        <div className='about-card'>
          <img src='https://media.istockphoto.com/id/1413763035/photo/portrait-of-smiling-black-businesswoman-looking-at-camera.webp?b=1&s=170667a&w=0&k=20&c=nuMUb04TSmVQzJUSXj4EOlNWDqwsMpg4pnu5hJ9TNCc=' alt='team 2' />
          <div className='about-card-content'>
            <h2>Lara Garrison</h2>
            <p>Manager</p>
            <p>Transportation of wood and paper products as well as equipment used in the woodworking industries.</p>
          </div>
        </div>

        {/* Third Card */}
        <div className='about-card'>
          <img src='https://media.istockphoto.com/id/1184196223/photo/businessman-using-digital-tablet.jpg?s=612x612&w=0&k=20&c=tKxZ8aj04teB38odVfjc8Yr5bBFQVt9f0EDeCFzUXz4=' alt='Service 3' />
          <div className='about-card-content'>
            <h2>Steven Dowson</h2>
            <p>Human Resource</p>
            <p>We deliver domestic electronics and appliances and enable our clients to monitor their loads online.</p>
          </div>
        </div>
      </div>
      {/* Footer */}
     <Footer />
    </div>
  );
};

export default About;

