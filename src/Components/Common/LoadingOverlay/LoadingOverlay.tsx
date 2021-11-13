import React from "react";
import { FaSpinner } from "react-icons/fa";
import styled from "../../Styled/styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgb(0, 0, 0, 0.4);

  & svg {
    width: 2rem;
    height: 2rem;
    top: 50vh;
    left: 48%;
    position: absolute;
    animation: spinner 0.6s linear infinite;
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingOverlay = () => (
  <Overlay>
    <FaSpinner />
  </Overlay>
);
