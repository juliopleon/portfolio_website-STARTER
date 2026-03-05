import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      Julio Leon: <br />
      Turning Ideas into Reality <br />
      </SectionTitle>
      <SectionText>
      AI Software Engineer with a passion for building powerful back-end systems and clean, modern front-end. I work across the full stack from Python, Java, C++ and C# on the back-end with MySQL and AWS infrastructure, to React.js, Next.js, and TypeScript on the front-end. AWS Cloud Practitioner certified, with hands-on experience in AI/ML, cloud optimization, and delivering scalable software that solves real problems. I care about writing code that is reliable, secure, and built to last.
      </SectionText>
      <Button onClick={() => window.location = "mailto:julioleon.eng@gmail.com"}>Get in Touch
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;