import React from "react";
import { FilterStyled } from "../Styled";

export const Filter = () => {
  return (
    <FilterStyled>
      <div className="fields">
        <label htmlFor="is-open">Open Now</label>
        <div>
          <input type="radio" value="false" id="is-open" />
          <label htmlFor="is-open">Open Now</label>
        </div>
        <div>
          <select title="price" value="1">
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
          </select>
        </div>
        <div>
          <select title="categories" value="1">
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
          </select>
        </div>
      </div>
      <div>
        <button>CLEAR ALL</button>
      </div>
    </FilterStyled>
  );
};
