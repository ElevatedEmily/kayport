'use client';

import React, { useState } from 'react';

export default function TiltCard() {
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left; // x position within the element
    const y = event.clientY - rect.top; // y position within the element

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = x - centerX;
    const deltaY = y - centerY;

    const rotateX = (deltaY / centerY) * 30; // Increase tilt intensity
    const rotateY = -(deltaX / centerX) * 30;

    setTiltStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: 'transform 0.2s ease-out', // Smoother and slower tilt
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'rotateX(0deg) rotateY(0deg)',
      transition: 'transform 0.5s ease-in-out', // Slower reset for smooth return
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        width: 'calc(60% - 3vw)', // Full width minus padding
        height: 'calc((60% - 5vw) / 2)', // Height proportional to width
        margin: '0 1vw', // Padding on left and right
        backgroundColor: '#fff',
        borderRadius: '16px',
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        perspective: '1000px', // Enable 3D effect
        ...tiltStyle,
      }}
    >
      <img
        src="/image1.png" // Replace with your image path
        alt="Tilt Card"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  );
}
