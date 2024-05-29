import React, { useState } from "react";
import "./Search.css";
import cities from "../../content/cities.json";
import Dropdown from "../dropdown/Dropdown";
import { formattedNum } from "../../Utils/Utils";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState(cities[0]);
  let num = "123456789";

  return (
    <div className="search">
      <div className="container">
        <form
          action={`/search${selectValue.route}`}
          method="get"
          className="search__form"
        >
          <div className="inputs-wrapper">
            <input
              name="q"
              type="text"
              placeholder={formattedNum(num) + " объявлений радом"}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="dropdown-container">
              <Dropdown
                options={cities}
                fontSize={"18px"}
                value={selectValue}
                setValue={setSelectValue}
              />
            </div>
          </div>
          <input
            type="submit"
            value={"Найти"}
            className="search__form-button"
          />
        </form>
      </div>
    </div>
  );
}

export default Search;
