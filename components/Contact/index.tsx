import type { NextPage } from 'next';

import { MdOutlineEmail } from 'react-icons/md';
import { Container, Info } from './styles';

const Contact: NextPage = () => (
  <Container id="contact">
    <div>
      <Info>
        <div>
          <div className="title">
            <div className="emailIconContainer">
              <div className="icon">
                <MdOutlineEmail />
              </div>
              <div className="line" />
            </div>
            <h1>how about starting a project together?</h1>
          </div>

          <p>
            Do you want to know more about me or talk about a potential project? Send me an email, even if it&apos;s
            just to say hi!
          </p>
        </div>
      </Info>

      <a href="mailto:brendamatias.sobral@gmail.com" className="button">
        send me an email
      </a>
    </div>
  </Container>
);

export default Contact;
