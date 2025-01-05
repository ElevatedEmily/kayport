import HeaderWithMenu from '../components/HeaderWithMenu';

export default function AboutPage() {
  return (
    <main
      style={{
        backgroundColor: '#DECCF9', // Matching pink background
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Header */}
      <HeaderWithMenu />

      {/* About Section */}
      <section
        style={{
          marginTop: '100px',
          width: '80%',
          backgroundColor: '#F9F1CC', // Yellow background for the content box
          borderRadius: '16px',
          padding: '40px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1
          style={{
            fontFamily: "'Corben', cursive",
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: '400',
            color: 'black',
            marginBottom: '20px',
          }}
        >
          About Me
        </h1>
        <p
          style={{
            fontFamily: "'Corben', cursive",
            fontSize: '18px',
            fontWeight: '300',
            color: '#333',
            lineHeight: '1.6',
            marginBottom: '20px',
          }}
        >
          Hi! I’m an IT Support Analyst and Consultant with a robust technical background and a
          proven track record of delivering exceptional support and innovative solutions. This
          website started as a personal project to explore web development and showcase my journey.
        </p>

        <h2
          style={{
            fontFamily: "'Corben', cursive",
            fontSize: '24px',
            fontWeight: '400',
            color: 'black',
            marginTop: '40px',
            marginBottom: '10px',
          }}
        >
          Professional Bio
        </h2>
        <p
          style={{
            fontFamily: "'Corben', cursive",
            fontSize: '18px',
            fontWeight: '300',
            color: '#333',
            lineHeight: '1.6',
          }}
        >
          Location: Iowa City, IA <br />
          Contact: <a href="mailto:kjmcdowell@uiowa.edu">kjmcdowell@uiowa.edu</a> | 319.383.6757
        </p>

        <h2
          style={{
            fontFamily: "'Corben', cursive",
            fontSize: '24px',
            fontWeight: '400',
            color: 'black',
            marginTop: '40px',
            marginBottom: '10px',
          }}
        >
          Technical Expertise
        </h2>
        <p
          style={{
            fontFamily: "'Corben', cursive",
            fontSize: '18px',
            fontWeight: '300',
            color: '#333',
            lineHeight: '1.6',
          }}
        >
          I excel in programming languages such as Python, JavaScript, ReactJS, HTML, CSS, and
          Java. My systems expertise includes Linux, Windows/Windows Server, Microsoft SCCM/Active
          Directory, VMware ESXi, and more. Additionally, I’m skilled in documentation, Microsoft
          365, and asset management, with hands-on experience in a personal home lab.
        </p>

        <h2
          style={{
            fontFamily: "'Corben', cursive",
            fontSize: '24px',
            fontWeight: '400',
            color: 'black',
            marginTop: '40px',
            marginBottom: '10px',
          }}
        >
          Education
        </h2>
        <ul
          style={{
            fontFamily: "'Corben', cursive",
            fontSize: '18px',
            fontWeight: '300',
            color: '#333',
            lineHeight: '1.8',
            marginLeft: '20px',
          }}
        >
          <li>
            <b>University of Iowa</b> (2021–2025, anticipated): Pursuing a BA in Informatics and
            contributing to the University of Iowa IT Advisory Committee.
          </li>
          <li>
            <b>Iowa City High School</b> (2021): High School Diploma (Magna Cum Laude, Silver Cord).
          </li>
          <li>
            <b>Eagle Scout</b>: Achieved in 2020, showcasing leadership and community commitment.
          </li>
        </ul>

        <h2
          style={{
            fontFamily: "'Corben', cursive",
            fontSize: '24px',
            fontWeight: '400',
            color: 'black',
            marginTop: '40px',
            marginBottom: '10px',
          }}
        >
          Professional Experience
        </h2>
        <ul
          style={{
            fontFamily: "'Corben', cursive",
            fontSize: '18px',
            fontWeight: '300',
            color: '#333',
            lineHeight: '1.8',
            marginLeft: '20px',
          }}
        >
          <li>
            <b>University of Iowa College of Law</b> (2022–Present): Spearheaded inventory
            restructures, Windows 11 migrations, and provided support for over 400 stakeholders.
          </li>
          <li>
            <b>Iowa City Community School District</b> (2021): Delivered tailored IT support to
            faculty, students, and parents during a district-wide technology overhaul.
          </li>
          <li>
            <b>Hy-Vee Inc</b> (2018–2021): Built exceptional customer service skills while managing
            retail inventory.
          </li>
          <li>
            <b>Iowa City High School</b> (2017–2021): Supported 1,600 devices as a Student Help
            Desk Technician, averaging 20-25 repairs weekly.
          </li>
        </ul>
      </section>
    </main>
  );
}
