// components/Header.tsx
'use client'; // Enables interactivity

export default function Header() {
  return (
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
      {/* Left Section */}
      <div style={{ flex: 1 }}></div>

      {/* Center Section */}
      <nav
        style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '300',
          fontSize: '18px',
        }}
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
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.1)')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
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
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.1)')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
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
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.1)')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          PROJECTS
        </a>
      </nav>

      {/* Right Section */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
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
          }}
          onClick={() => (window.location.href = 'mailto:kjmcdowell@uiowa.edu')}
        >
          CONTACT ME
        </div>
      </div>
    </header>
  );
}
