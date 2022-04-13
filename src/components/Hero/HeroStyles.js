import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const Span = styled.span`
font-size:90px;
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 65px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 45px;
    padding-top: 15px
    line-height: 24px;
    padding-bottom: 16px;
  }
`;

export const Span2 = styled.span`
  font-size: 9rem;
  background: linear-gradient(130deg, #f4743b 70%, #122c34 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 35px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 25px;
    padding-top: 15px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;
