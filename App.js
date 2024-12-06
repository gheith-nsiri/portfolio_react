import React from 'react';
import ProfileImage from './profile/ProfileImage';
import CardBox from './profile/CardBox';
import './styles/cvStyles.css';

function App() {
  const sections = [
    {
      title: 'Education',
      text: "Bachelor's Degree in Computer Science from ISET GAFSA. During my studies, I focused on software development, algorithms, and data structures, gaining hands-on experience with various programming languages and tools.",
      icon: 'bi-book',
    },
    {
      title: 'Experience',
      text: '3 years of software development experience. I have worked on full-stack web applications using JavaScript, React, Node.js, and Python, as well as integrating APIs and working with databases like MySQL and MongoDB. My roles have included designing, developing, testing, and deploying web solutions.',
      icon: 'bi-briefcase',
    },
    {
      title: 'Skills',
      text: 'Proficient in JavaScript, React, Node.js, Python, HTML, CSS, Git, and cloud platforms like AWS. I am skilled in building responsive, scalable web applications and implementing security best practices. I also have experience with Agile methodologies and CI/CD pipelines.',
      icon: 'bi-laptop',
    },
    {
      title: 'Contact',
      text: 'Email: firek9138@gmail.com | 24333040 . You can reach out to me for job opportunities, collaborations, or inquiries.',
      icon: 'bi-envelope',
    },
    {
      title: 'Hobbies',
      text: 'In my spare time, I enjoy reading technology books, traveling to new destinations to explore different cultures, and working on side projects to improve my coding skills. I also have a passion for photography and capturing landscapes and urban environments.',
      icon: 'bi-heart',
    },
  ];

  return (
    <div className="container">
      <div className="profile-header">
        <ProfileImage imageSrc="1.jpg" altText="Profile Image" />
        <div className="profile-info">
          <h1>Gheith Nsiri</h1>
          <p>ISET GAFSA | Passionate About Technology</p>
        </div>
      </div>

      <h2>PORTFOLIO</h2>

      <div className="row">
        {sections.map((section, index) => (
          <div key={index} className="col-md-4">
            <CardBox
              title={section.title}
              text={section.text}
              icon={section.icon}
            />
          </div>
        ))}
      </div>

      <div className="contact-info">
        <p>For inquiries, feel free to reach out:</p>
        <p>
          <a href="gheithnsiri@gmail.com">Email me</a> |{' '}
          <a href="tel:123-456-7890">Call me</a>
        </p>
      </div>
    </div>
  );
}

export default App;
