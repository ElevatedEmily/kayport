'use client';

import React, { useState } from 'react';

export default function HeaderWithMenu() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const hoverStyle = (
    e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>,
    backgroundColor: string,
    textColor?: string
  ) => {
    (e.currentTarget as HTMLElement).style.backgroundColor = backgroundColor;
    if (textColor) {
      (e.currentTarget as HTMLElement).style.color = textColor;
    }
  };

  return (
    <>
      {/* Header */}
      <header
        style={{
          position: 'absolute',
          top: '1vh',
          left: '0.5vh',
          right: '0.5vh',
          backgroundColor: '#DECCF9',
          border: '1px solid black',
          borderRadius: '0 0 16px 16px',
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontFamily: "'Corben', cursive",
          fontSize: '24px',
          fontWeight: '400',
          color: 'black',
        }}
      >
        {/* Kyle McDowell */}
        <div>Kyle McDowell</div>

        {/* Centered Navigation for large screens */}
        <nav
          style={{
            display: 'none',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: '300',
            fontSize: '18px',
            flex: 1,
          }}
          className="desktop-nav"
        >
          <a
            href="/resume.pdf"
            download
            style={{
              textDecoration: 'none',
              color: 'black',
              cursor: 'pointer',
              padding: '5px 10px',
              borderRadius: '8px',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => hoverStyle(e, '#E7F9CC')}
            onMouseOut={(e) => hoverStyle(e, 'transparent')}
          >
            RESUME
          </a>
          <a
            href="/about"
            style={{
              textDecoration: 'none',
              color: 'black',
              cursor: 'pointer',
              padding: '5px 10px',
              borderRadius: '8px',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => hoverStyle(e, '#E7F9CC')}
            onMouseOut={(e) => hoverStyle(e, 'transparent')}
          >
            ABOUT
          </a>
          <a
            href="/projects"
            style={{
              textDecoration: 'none',
              color: 'black',
              cursor: 'pointer',
              padding: '5px 10px',
              borderRadius: '8px',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => hoverStyle(e, '#E7F9CC')}
            onMouseOut={(e) => hoverStyle(e, 'transparent')}
          >
            PROJECTS
          </a>
        </nav>

        {/* Contact Button */}
        <div
          style={{
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '16px',
            padding: '8px 16px',
            fontFamily: "'Corben', cursive",
            fontSize: '16px',
            cursor: 'pointer',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            
            transition: 'background-color 0.3s, color 0.3s',
          }}
          onClick={() => (window.location.href = 'mailto:kjmcdowell@uiowa.edu')}
          onMouseOver={(e) => hoverStyle(e, '#E7F9CC', 'black')}
          onMouseOut={(e) => hoverStyle(e, 'black', 'white')}
        >
          CONTACT ME
        </div>

        {/* Hamburger Menu Icon for small screens */}
        <div
          style={{
            cursor: 'pointer',
            fontSize: '28px', // Increased font size for larger icon
            display: 'flex',
          }}
          className="hamburger-icon"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </div>
      </header>

      {/* Overlay Menu */}
      {isMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#DECCF9',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          {/* Close Button */}
          <div
            style={{
              position: 'absolute',
              top: '10px',
              backgroundColor: 'transparent',
              color: 'black',
              cursor: 'pointer',
              textAlign: 'center',
              width: '30px',
              height: '30px',
              border: '1px solid black',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => setMenuOpen(false)}
            onMouseOver={(e) => hoverStyle(e, '#E7F9CC')}
            onMouseOut={(e) => hoverStyle(e, 'transparent')}
          >
            ✕
          </div>

          {/* Centered Menu Links */}
          <nav
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              fontSize: '24px',
              fontWeight: '300',
              textAlign: 'center',
            }}
          >
            <a
              href="/resume.pdf"
              download
              style={{
                textDecoration: 'none',
                color: 'black',
                padding: '10px 20px',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) => hoverStyle(e, '#E7F9CC')}
              onMouseOut={(e) => hoverStyle(e, 'transparent')}
            >
              RESUME
            </a>
            <a
              href="/about"
              style={{
                textDecoration: 'none',
                color: 'black',
                padding: '10px 20px',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) => hoverStyle(e, '#E7F9CC')}
              onMouseOut={(e) => hoverStyle(e, 'transparent')}
            >
              ABOUT
            </a>
            <a
              href="/projects"
              style={{
                textDecoration: 'none',
                color: 'black',
                padding: '10px 20px',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) => hoverStyle(e, '#E7F9CC')}
              onMouseOut={(e) => hoverStyle(e, 'transparent')}
            >
              PROJECTS
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
