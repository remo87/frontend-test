import React, { useState } from "react";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { KeyValue } from "../../interfaces/common";
import { RadioButton, SelectionListWithValue } from "../Common";
import { FilterStyledMobile, HR, PrimaryButton } from "../Styled";
import styled from "../Styled/styled-components";
import { prices, restaurantCategoires } from "../../utils/filterData";
import { IFilter } from "../../interfaces/requests";

interface IProps {
  show: boolean;
  setShow: (value: boolean) => void;
  filter: IFilter;
  onSetFilter: (filter: IFilter) => void;
}

const RowBetween = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

export const MobileFilter = ({
  filter,
  onSetFilter,
  show,
  setShow,
}: IProps) => {
  const [internalFilter, setInternalFilter] = useState<IFilter>(filter);

  const handleSetIsOpen = () => {
    const newFilter: IFilter = {
      ...filter,
      open_now: !filter.open_now,
    };
    setInternalFilter(newFilter);
  };

  const handleSelectedPrice = ({ key, value }: KeyValue) => {
    const newFilter: IFilter = {
      ...filter,
      price: key === "all" ? undefined : key,
    };
    setInternalFilter(newFilter);
  };

  const handleSelectedCategory = ({ key, value }: KeyValue) => {
    const newFilter: IFilter = {
      ...filter,
      categories: key === "all" ? undefined : key,
    };
    setInternalFilter(newFilter);
  };

  const handleClear = () => {
    const newFilter: IFilter = {
      ...filter,
      categories: undefined,
      open_now: undefined,
      price: undefined,
    };
    setInternalFilter(newFilter);
    onSetFilter(newFilter);
    setShow(false);
  };

  const applyFilter = () => {
    onSetFilter(internalFilter);
    setShow(false);
  };

  const emptyFilter =
    !internalFilter.categories &&
    !internalFilter.price &&
    !internalFilter.open_now;

  return (
    <div>
      <HR />
      <RowBetween onClick={() => setShow(!show)}>
        <label>Filter By:</label>
        {show ? <FaTimes /> : <FaChevronDown />}
      </RowBetween>
      <HR />
      {show ? (
        <FilterStyledMobile>
          <div className="fields">
            <RowBetween>
              <button disabled={emptyFilter} onClick={handleClear}>
                CLEAR ALL
              </button>
              <PrimaryButton disabled={emptyFilter} onClick={applyFilter}>
                APPLY
              </PrimaryButton>
            </RowBetween>
            <HR />
            <RowBetween>
              <span className="label">OPEN NOW</span>
              <Toggle
                defaultChecked={internalFilter.open_now}
                icons={false}
                onChange={handleSetIsOpen}
              />
            </RowBetween>
            <HR />
            <div>
              <span className="label">PRICE</span>
              <RadioButton
                items={prices}
                selected={internalFilter.price || "all"}
                setSelectedItem={handleSelectedPrice}
              />
            </div>
            <HR />
            <div>
              <RowBetween>
                <span className="label">PRICE</span>
                <span className="secondary">Select One</span>
              </RowBetween>
              <SelectionListWithValue
                label="Categories"
                name="categories"
                selected={internalFilter.categories || "all"}
                items={restaurantCategoires}
                selectedItem={handleSelectedCategory}
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </FilterStyledMobile>
      ) : null}
    </div>
  );
};
