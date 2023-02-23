import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio <br />
        By Julio Leon
      </SectionTitle>
      <SectionText>
        As a software developer with experience in JavaScript, Node.js, C#, Vue.js, React, MySQL, APIs, and databases, I bring a wealth of knowledge and skills to any organization seeking to build reliable and scalable software solutions.
      </SectionText>
      <Button onClick={() => window.location = "mailto:software.julioleon@gmail.com"}>Get in Touch
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;