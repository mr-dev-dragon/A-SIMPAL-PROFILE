import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  {
    number: 2014,
    text: "Baccalauréat Maintenance des Equipements Industriels",
  },
  { number: 2021, text: "Built 10 web and mobile applications in 10 weeks" },
  {
    number: 2022,
    text: "Titre professionnel Chef de projet de développement d'applications web et mobile (RNCP 6 - Niveau Bac +3/4)",
  },
  { number: 2022, text: "Built my first responsive website (this one)" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
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
