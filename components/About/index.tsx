import type { NextPage } from 'next';

import { Container, AboutMe, SkillBar } from './styles';

const About: NextPage = () => {
  const skills = [
    {
      label: 'Javascript',
      percentage: 90,
    },
    {
      label: 'React',
      percentage: 80,
    },
    {
      label: 'Node.js',
      percentage: 80,
    },
    {
      label: 'TypeScript',
      percentage: 70,
    },
    {
      label: 'HTML / CSS',
      percentage: 90,
    },
  ];

  return (
    <Container id="about">
      <div>
        <AboutMe>
          <h2 className="title-section">About me</h2>
          <p>Hello! I&apos;m Brenda Matias, a computer engineer who loves to turn dream into code lines</p>
          <p>
            I have skills and experience with Java, JavaScript, React, Node.js, Delphi, Adonis Js, Vue.js, Oracle SQL,
            Mongo DB, Postgres and SQL Server.
          </p>

          <p>
            I am a Front-End lover, where I always seek to learn and enhance my skills in this development modality,
            also proficient on projects that requires skills on Back-End development modalities.
          </p>
          <p>Here are a few technologies I&apos;ve been working with recently:</p>
        </AboutMe>

        <ul>
          {skills.map(({ label, percentage }) => (
            <li key={label}>
              <span>{label}</span>

              <SkillBar width={percentage}>
                <div className="skill-bar-in">
                  <span>{percentage}%</span>
                </div>
              </SkillBar>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default About;
