'use client';

import React from 'react';

export default function SelectedWorks() {
  const works = [
    { name: 'Self-Configured HP ProLiant Gen9', link: 'https://kaymick.net/kayserv.html' },
    { name: 'Bike Store', link: 'https://master.d2ivavsjuldlp2.amplifyapp.com/' },
    { name: 'AWS Tutorial', link: '/aws-tutorial.pdf', isDownload: true },
  ];

  const handleCardClick = (work: typeof works[0]) => {
    if (work.isDownload) {
      const link = document.createElement('a');
      link.href = work.link;
      link.download = true;
      link.click();
    } else {
      window.location.href = work.link;
    }
  };

  return (
    <section
      className="selected-works"
      style={{
        width: '100%',
        marginTop: '100px', // Add spacing below TiltCard
        backgroundColor: '#DECCF9', // Final background color after gradient
        padding: '60px 20px', // Add padding for content
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2
        style={{
          fontFamily: "'Corben', cursive",
          fontSize: 'clamp(32px, 5vw, 64px)',
          fontWeight: '400',
          color: 'black',
          textAlign: 'center',
          marginBottom: '40px',
        }}
      >
        Selected Works
      </h2>
      {/* Selected Works Grid */}
      <div
        style={{
          width: '80%',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          gap: '20px',
        }}
      >
        {works.map((work, index) => (
          <div
            key={index}
            className="work-card"
            onClick={() => handleCardClick(work)}
            style={{
              position: 'relative',
              width: 'calc(30% - 20px)',
              height: '200px',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
            }}
          >
            {/* Background Image */}
            <img
              src={`/work${index + 1}.jpg`} // Replace with actual image paths
              alt={work.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            {/* Text Overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '25%', // Bottom quarter of the card
                backgroundColor: 'rgba(0, 0, 0, 0.6)', // Transparent black background
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#F9DECC', // Text color
                fontFamily: "'Corben', cursive",
                fontSize: '18px',
                fontWeight: '400',
                textAlign: 'center',
              }}
            >
              {work.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
