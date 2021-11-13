import React, { useState } from "react";
import { KeyValue } from "../../interfaces/common";
import { Checkbox, SelectionList } from "../Common";
import { FilterStyled } from "../Styled";
import { prices, restaurantCategoires } from "../../utils/filterData";
import { IFilter } from "../../interfaces/requests";

interface IProps {
  filter: IFilter;
  onSetFilter: (filter: IFilter) => void;
}

export const Filter = ({ filter, onSetFilter }: IProps) => {
  const [checked, setChecked] = useState(false);

  const handleSetIsOpen = () => {
    const newFilter: IFilter = {
      ...filter,
      open_now: !filter.open_now,
    };
    onSetFilter(newFilter);
  };

  const handleSelectedPrice = ({ key, value }: KeyValue) => {
    const newFilter: IFilter = {
      ...filter,
      price: key === "all" ? undefined : key,
    };
    onSetFilter(newFilter);
  };

  const handleSelectedCategory = ({ key, value }: KeyValue) => {
    const newFilter: IFilter = {
      ...filter,
      categories: key === "all" ? undefined : key,
    };
    onSetFilter(newFilter);
  };

  const handleClear = () => {
    const newFilter: IFilter = {
      ...filter,
      categories: undefined,
      open_now: undefined,
      price: undefined,
    };
    onSetFilter(newFilter);
  };

  return (
    <FilterStyled>
      <div className="fields">
        <label>Filter By:</label>
        <Checkbox
          checked={checked}
          onChange={() => setChecked((prev) => !prev)}
          label="Open Now"
        />
        <div>
          <SelectionList
            label="Price"
            name="price"
            selected={filter.price || "all"}
            items={prices}
            selectedItem={handleSelectedPrice}
          />
        </div>
        <div>
          <SelectionList
            label="Categories"
            name="categories"
            selected={filter.categories || "all"}
            items={restaurantCategoires}
            selectedItem={handleSelectedCategory}
            style={{ width: "11.875rem" }}
          />
        </div>
      </div>
      <div>
        <button onClick={handleClear}>CLEAR ALL</button>
      </div>
    </FilterStyled>
  );
};
