import React, { Component, useEffect, useRef } from "react";
import { init } from "ityped";
import {
  Section,
  SectionText,
  SectionTitle,
  SectionText2,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Span, Span2 } from "./HeroStyles";

function Hero() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      typeSpeed: 120,
      backSpeed: 30,
      loop: true,
      strings: ["Front-End", "Back-End", "FullStack"],
    });
  }, []);
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi There, I'm
          <br />
          <Span>Kevin Toussaint</Span> <br />
          Web Developer
          <Span2 style={{ marginLeft: "2rem" }} ref={textRef}></Span2>
        </SectionTitle>
        <SectionText2>
          Are you looking for a fresh junior web developer? Highly motivated and
          fast learner? I'm here for you! You can download my CV/Resume by
          clicking on the button below.
          <br />
        </SectionText2>
        <Button
          onClick={() =>
            (window.location =
              "https://drive.google.com/uc?export=download&id=17tKOhx1MYfXvIFGFKZvj5f8Gnuw1IuCi")
          }
        >
          <td>My CV</td>
        </Button>
      </LeftSection>
    </Section>
  );
}

export default Hero;
