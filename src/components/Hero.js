


import React from 'react';
import './Hero.css';

const Hero = () => {

  const inquireNow = () => {
    const contactSection = document.getElementById('contact');

    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero section" id="home" style={{ position: 'relative', overflow: 'hidden' }}>
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src="./media/drone.mp4" type="video/mp4" />
        {/* You can add additional source elements for different video formats (e.g., webm, ogg) */}
     
      </video>
      <div className="hero__content" style={{ zIndex: 1, color: '#fff', textAlign: 'center', position: 'relative' }}>
        <h3 className="hero__title animated-text">
        <b>Professional Metal Suppliers In The World</b> <br />
        Kasthuri Metals is an integrated steel manufacturing company  <br />
        that produces and markets rolled steel sheets worldwide. <br />
        We are located in Matara City, Sri Lanka.
        </h3>
        <button className="hero__button animated-button on" onClick={inquireNow}>Start Your Inquiry Now</button>
      </div>
    </section>
  );
}

export default Hero;
