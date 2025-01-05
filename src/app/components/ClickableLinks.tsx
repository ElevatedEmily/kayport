'use client';

import React, { useState } from 'react';

export default function ClickableLinks() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: '40px',
        padding: '0 20px',
        fontFamily: "'Corben', cursive",
        fontWeight: '400',
      }}
    >
      {/* Left-Aligned Link */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onMouseEnter={() => setHovered('projects')}
        onMouseLeave={() => setHovered(null)}
        onClick={() => (window.location.href = '/projects')}
      >
        <div
          style={{
            width: hovered === 'projects' ? 'clamp(24px, 2vw, 100px)' : 'clamp(24px, 4vw, 120px)',
            height: hovered === 'projects' ? 'clamp(24px, 2vw, 100px)' : 'clamp(24px, 4vw, 120px)',
            borderRadius: '50%',
            backgroundColor: hovered === 'projects' ? '#E0AC24' : 'black', // Change color dynamically
            marginRight: '20px',
            transform: 'translateY(6px)', // Move the circle down by 6px
            transition: 'width 0.3s, height 0.3s, background-color 0.3s', // Smooth color and size transition
          }}
        />
        <span
          style={{
            fontSize: 'clamp(24px, 6vw, 100px)', // Dynamically resize the text
            color: hovered === 'projects' ? '#E0AC24' : 'black', // Change text color dynamically
            transition: 'color 0.3s', // Smooth color transition
            lineHeight: '1', // Ensure text and circle alignment
            textShadow: hovered == 'projects' ? '1px 1px 1px black' : '1px 1px 1px black',
          }}
        >
          Projects
        </span>
      </div>

      {/* Right-Aligned Link */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          justifyContent: 'flex-end',
        }}
        onMouseEnter={() => setHovered('sayHello')}
        onMouseLeave={() => setHovered(null)}
        onClick={() => (window.location.href = 'mailto:kjmcdowell@uiowa.edu')}
      >
        <span
          style={{
            fontSize: 'clamp(24px, 6vw, 100px)', // Dynamically resize the text
            color: hovered === 'sayHello' ? '#E0AC24' : 'black', // Change text color dynamically
            transition: 'color 0.3s', // Smooth color transition
            marginRight: '20px',
            lineHeight: '1', // Ensure text and circle alignment
            textShadow: hovered == 'sayHello' ? '1px 1px 0px black' : '1px 1px 1px black', // 1-pixel no-blur shadow
          }}
        >
          Say Hello
        </span>
        <div
          style={{
            width: hovered === 'sayHello' ? 'clamp(24px, 2vw, 100px)' : 'clamp(24px, 4vw, 120px)',
            height: hovered === 'sayHello' ? 'clamp(24px, 2vw, 100px)' : 'clamp(24px, 4vw, 120px)',
            borderRadius: '50%',
            backgroundColor: hovered === 'sayHello' ? '#E0AC24' : 'black', // Change color dynamically
            transform: 'translateY(6px)', // Move the circle down by 6px
            transition: 'width 0.3s, height 0.3s, background-color 0.3s', // Smooth color and size transition
          }}
        />
      </div>
    </div>
  );
}
