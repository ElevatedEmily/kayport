import HeaderWithMenu from './components/HeaderWithMenu';
import ClickableLinks from './components/ClickableLinks';
import TiltCard from './components/TiltCard';
import EducationAndExperience from './components/EducationAndExperience';

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: '#DECCF9', // Pink background for the entire page
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Header */}
      <HeaderWithMenu />

      {/* IT SUPPORT CONSULTANT */}
      <h1
        style={{
          marginTop: '60px',
          fontFamily: "'Corben', cursive",
          fontSize: 'clamp(48px, 8vw, 96px)', // Ensure large text scaling
          fontWeight: '400',
          color: 'black',
          textAlign: 'center',
          lineHeight: '1.2',
        }}
      >
        IT SUPPORT
        <br />
        CONSULTANT
      </h1>

      {/* Clickable Links */}
      <div
        style={{
          marginTop: '40px',
          width: '100%', // Ensure full width for proper alignment
        }}
      >
        <ClickableLinks />
      </div>

      {/* Tilt Card */}
      <div
        style={{
          marginTop: '4vh',
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <TiltCard />
      </div>

      {/* Education and Experience Section */}
      <div
        style={{
          backgroundColor: '#F9DECC', // Yellow box for the education section
          borderRadius: '16px', // Rounded corners
          margin: '2vh 1vw', // 1vw margins on sides
          padding: '40px', // Padding for content
          width: 'calc(100% - 2vw)', // Full width minus margins
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow
        }}
      >
        <EducationAndExperience />
      </div>
    </main>
  );
}
