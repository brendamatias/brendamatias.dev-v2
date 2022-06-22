/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import type { NextPage } from 'next';
import Image from 'next/image';

import { MdOutlineArrowForward, MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useState } from 'react';
import { Container, Info, Slider } from './styles';

import projects from './projects.json';

const Projects: NextPage = () => {
  const [project, setProject] = useState(0);

  const handleProject = (value: number) => {
    const currentValue = project + value;
    if (currentValue >= projects.length) return setProject(0);
    if (currentValue < 0) return setProject(projects.length - 1);

    return setProject(currentValue);
  };
  const getImage = (imageName: string) => require(`../../assets/${imageName}`);

  return (
    <Container id="projects">
      <div>
        <Info>
          <h2 className="title-section">Projects</h2>

          <span>#02</span>

          <h1>{projects[project].title}</h1>
          <p>{projects[project].subtitle}</p>

          <strong>about the project</strong>
          <p>{projects[project].description}</p>

          <a href={projects[project].url} className="btn">
            see project
            <MdOutlineArrowForward />
          </a>
        </Info>

        <Slider>
          <div className="img">
            <Image src={getImage(projects[project].image)} alt="Project" />

            <div className="timeline">
              {[...Array(projects.length)].map((_, index) => (
                <div key={index} className={`${project === index && 'active'}`} />
              ))}
            </div>
            <div className="buttons">
              <button type="button" onClick={() => handleProject(-1)}>
                <MdChevronLeft />
              </button>

              <button type="button" onClick={() => handleProject(+1)}>
                <MdChevronRight />
              </button>
            </div>
          </div>
        </Slider>
      </div>
    </Container>
  );
};

export default Projects;
