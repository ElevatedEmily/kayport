import HeaderWithMenu from '../components/HeaderWithMenu';
import SelectedWorks from '../components/SelectedWorks';

export default function ProjectsPage() {
  return (
    <main
      style={{
        backgroundColor: '#DECCF9', // Same pink background as the home page
        minHeight: '100vh', // Ensure full viewport height
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Header */}
      <HeaderWithMenu />

      {/* Selected Works Section */}
      <div
        style={{
          marginTop: '-60px', // Spacing below the title
          width: '100%',
        }}
      >
        <SelectedWorks />
      </div>
    </main>
  );
}
