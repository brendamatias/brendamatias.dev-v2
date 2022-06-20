import type { NextPage } from 'next';

import { Container, AboutMe } from './styles';

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
          <h2>About me</h2>
          <p>
            Hello! I&apos;m Brenda Matias, a computer engineer, who likes to build things for the internet. I graduated
            in 2019.2 at Maurício de Nassau University.
          </p>
          <p>
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
            took.
          </p>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text.
          </p>
          <p>Here are a few technologies I&apos;ve been working with recently:</p>
        </AboutMe>

        <ul>
          {skills.map(({ label, percentage }) => (
            <li key={label}>
              <span>{label}</span>

              <div className="skill-bar">
                <div className="skill-bar-in" style={{ width: `${percentage}%` }}>
                  <span>{percentage}%</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default About;
