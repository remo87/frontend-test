import React from "react";
import styled from "../../Styled/styled-components";

interface IProps {
  checked: boolean;
}

const StyledLabel = styled.label`
  border-bottom: solid 1px ${({ theme }) => theme.colors.grayTwo};
  padding-bottom: 0.5rem;
  height: fit-content;
  display: flex;

  & span {
    line-height: 1rem;
    margin-left: 0.5rem;
    color: ${({ theme }) => theme.colors.blueTwo};
    font-size: 1rem;
  }
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  border: solid 1px ${({ theme }) => theme.colors.grayTwo};
  width: 1rem;
  height: 1rem;
  border-radius: 50px;
`;

const Icon = styled.div`
  fill: none;
  background-color: ${({ theme }) => theme.colors.blueTwo};
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50px;
  margin: auto;
  margin-top: 0.15rem;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div<IProps>`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  transition: all 150ms;

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

export const Checkbox = ({ className, checked, label, ...props }: any) => (
  <StyledLabel>
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon />
      </StyledCheckbox>
    </CheckboxContainer>
    <span>{label}</span>
  </StyledLabel>
);
