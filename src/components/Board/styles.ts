import styled from "@emotion/styled";

export const BoardContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));

  @media only screen and (min-width: 1025px) {
    justify-items: left;
  }
`;
