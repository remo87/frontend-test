import styled from "./styled-components";

export const StyledRadio = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  :checked + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 1.4em;
    height: 1.4em;
    border: 1px solid #aaa;
    background: #FFF;
    border-radius: .2em;
    box-shadow: inset 0 1px 3px rgba(0,0,0, .1), 0 0 0 rgba(203, 34, 237, .2);
    -webkit-transition: all .275s;
        transition: all .275s;
  }
`;
