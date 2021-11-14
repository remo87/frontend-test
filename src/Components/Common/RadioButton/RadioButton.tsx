import React from "react";
import { KeyValue } from "../../../interfaces/common";
import styled from "../../Styled/styled-components";

interface IProps {
  selected: string;
  items: KeyValue[];
  setSelectedItem: (value: KeyValue) => void;
  style?: IStyleProps;
}

interface IStyleProps {
  width?: string;
}

const RadioContainers = styled.div`
  display: flex;
`;

interface IButtonProps {
  selected?: boolean;
}

const RadioButtonStyled = styled.button<IButtonProps>`
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.blueTwo : theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grayFive};
  box-sizing: border-box;
  border-radius: 2px;
  color: ${({ theme, selected }) =>
    selected ? theme.colors.white : theme.colors.black};
`;

export const RadioButton = ({ selected, setSelectedItem, items }: IProps) => {
  const handleSelectedItem = (value: KeyValue) => {
    setSelectedItem(value);
  };

  return (
    <RadioContainers>
      <RadioButtonStyled
        selected={"all" === selected}
        onClick={() => handleSelectedItem({ key: "all", value: "ALL" })}
      >
        ALL
      </RadioButtonStyled>
      {items.map((item) => (
        <RadioButtonStyled
          selected={item.key === selected}
          key={item.key}
          onClick={() => handleSelectedItem(item)}
        >
          {item.value}
        </RadioButtonStyled>
      ))}
    </RadioContainers>
  );
};
