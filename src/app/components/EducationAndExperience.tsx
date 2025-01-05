'use client';

import React from 'react';

export default function EducationAndExperience() {
  const entries = [
    {
      title: 'Bachelor of Arts in Informatics',
      institution: 'University of Iowa',
      years: '2021 - 2025',
      description: 'Studied information technology, server management, and web development.',
    },
    {
      title: 'IT Consultant',
      institution: 'University of Iowa College of Law',
      years: '2022 - 2025',
      description: 'Inventory restructuring and SCCM implementations for over 400 users.',
    },
    {
      title: 'IT Intern',
      institution: 'Iowa City Community School District',
      years: 'Summer 2021',
      description: 'Provided technical support and customized software solutions for over 500 users.',
    },
    {
      title: 'Help Desk Technician',
      institution: 'Creative Design Co.',
      years: '2017 - 2021',
      description: 'Provided technical support and hardware repair for over 2000 users.',
    },
  ];

  return (
    <section
      style={{
        width: '100%',
        padding: '60px 20px',
        backgroundColor: '#F9DECC', // Neutral background
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
        Education & Experience
      </h2>

      {/* Entries */}
      <div
        style={{
          width: '80%',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {entries.map((entry, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#fff',
              borderRadius: '16px',
              padding: '20px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3
              style={{
                fontFamily: "'Corben', cursive",
                fontSize: '20px',
                fontWeight: '400',
                marginBottom: '5px',
                color: '#333',
              }}
            >
              {entry.title}
            </h3>
            <p
              style={{
                fontFamily: "'Corben', cursive",
                fontSize: '16px',
                fontWeight: '300',
                marginBottom: '5px',
                color: '#666',
              }}
            >
              {entry.institution}
            </p>
            <p
              style={{
                fontFamily: "'Corben', cursive",
                fontSize: '14px',
                fontWeight: '300',
                color: '#999',
                marginBottom: '10px',
              }}
            >
              {entry.years}
            </p>
            <p
              style={{
                fontFamily: "'Corben', cursive",
                fontSize: '16px',
                fontWeight: '300',
                color: '#333',
              }}
            >
              {entry.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
