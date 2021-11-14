import React, { useState, FC } from "react";
import { KeyValue } from "../../../interfaces/common";
import styled from "../../Styled/styled-components";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface IProps {
  label: string;
  name: string;
  selected: string;
  items: KeyValue[];
  selectedItem: (value: KeyValue) => void;
  style?: IStyleProps;
}

interface IStyleProps {
  width?: string;
}

export const ItemsList = styled.ul`
  position: absolute;
  list-style: none;
  padding: 1rem;
  margin: 0;
  margin-top: 0.5rem;
  border: solid 1px ${({ theme }) => theme.colors.grayTwo};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.1),
    inset 0px -1px 0px ${({ theme }) => theme.colors.grayTwo};
  max-height: 50%;
  overflow: scroll;
`;

const Container = styled.div<IStyleProps>`
  border-bottom: solid 1px ${({ theme }) => theme.colors.grayTwo};
  padding-bottom: 0.5rem;
  width: ${({ width }) => width || "6rem"};

  & .label {
    line-height: 1rem;
    margin-left: 0.5rem;
    color: ${({ theme }) => theme.colors.blueTwo};
    font-size: 1rem;
  }

  & .label-container {
    display: flex;
    justify-content: space-between;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`;

const ListItem = styled.li`
  & label {
    color: ${({ theme }) => theme.colors.grayFour};
    margin-left: 0.5rem;
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 0.03125rem;
  }
`;

export const SelectionList: FC<IProps> = ({
  label,
  name,
  selected,
  items,
  selectedItem,
  children,
  style,
}) => {
  const [show, setShow] = useState(false);

  const handleSelectedItem = (value: KeyValue) => {
    setShow(false);
    selectedItem(value);
  };

  return (
    <Container width={style?.width}>
      <div className="label-container" onClick={() => setShow((prev) => !prev)}>
        <span className="label">
          {label}
        </span>
        {show ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {show ? (
        <>
          <Overlay onClick={() => setShow(false)}></Overlay>
          <ItemsList>
            <ListItem value="all">
              <input
                id="all"
                name={name}
                type="radio"
                value="all"
                checked={"all" === selected}
                onChange={() =>
                  handleSelectedItem({ key: "all", value: "all" })
                }
              />
              <label htmlFor="all">All</label>
            </ListItem>
            {items.map(({ key, value }) => (
              <ListItem key={key} value={key}>
                <input
                  id={key}
                  name={name}
                  type="radio"
                  value={key}
                  checked={key === selected}
                  onChange={() => handleSelectedItem({ key, value })}
                />
                <label htmlFor={key}>{value}</label>
              </ListItem>
            ))}
          </ItemsList>
        </>
      ) : null}
    </Container>
  );
};
