'use client';

export default function ContactButton() {
  return (
    <div
      style={{
        position: 'absolute',
        top: '2vh', // Move button down by 1vh
        right: '15px',
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '16px',
        padding: '8px 16px',
        fontFamily: "'Corben', cursive",
        fontSize: '16px',
        cursor: 'pointer',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        //transform: 'translateY(-50%)',
      }}
      onClick={() => (window.location.href = 'mailto:kjmcdowell@uiowa.edu')}
    >
      CONTACT ME
    </div>
  );
}
