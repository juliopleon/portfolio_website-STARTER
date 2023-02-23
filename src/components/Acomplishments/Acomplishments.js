import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';


// change to my own accomplishments such as how many projects ive done
const data = [
  { number: '15+', text: 'Open Source Projects' },
  { number: 2023, text: 'Graduated from CodeWorks', },
  { number: '10+', text: 'Completed Online Courses', },
  { number: '1st', text: 'Won a local hackathon by creating a web application that helps people find fitness workouts', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
