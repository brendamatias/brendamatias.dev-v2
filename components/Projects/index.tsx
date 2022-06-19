import type { NextPage } from 'next';
import Image from 'next/image';

import { MdOutlineArrowForward, MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Container, Info, Slider } from './styles';
import project from '../../assets/project.jpg';

const Projects: NextPage = () => (
  <Container>
    <div>
      <Info>
        <span>#02</span>

        <h1>Roda Acessível</h1>
        <p>Lorem ipsum is lorem ipsum is lorem</p>

        <strong>sobre o projeto</strong>
        <p>
          Iam trusted my company in allies and the results have been satisfying because my companyhas growing. Iam
          trusted my company in allies and the results have been satisfying because my company has growing.
        </p>

        <a href="#teste" className="btn">
          ver projeto
          <MdOutlineArrowForward />
        </a>
      </Info>

      <Slider>
        <div className="img">
          <Image src={project} alt="Project" />

          <div className="timeline">
            <div />
            <div className="active" />
            <div />
            <div />
          </div>

          <div className="buttons">
            <button type="button">
              <MdChevronLeft />
            </button>

            <button type="button">
              <MdChevronRight />
            </button>
          </div>
        </div>
      </Slider>
    </div>
  </Container>
);

export default Projects;
