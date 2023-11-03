import React from "react";
import DownArrowIcon from "../Shared/Icon/DownArrowIcon";
import FilterIcon from "../Shared/Icon/FilterIcon";

const TodoFilter = ({
  displayOption,
  sortOption,
  setDisplayOption,
  setSortOption,
  isDropDownSelected,
  setIsDropDownSelected,
}) => {
  const handleDisplayChange = (e) => {
    // Save the selected grouping option in localStorage
    localStorage.setItem("displayOption", e.target.value);
    setDisplayOption(e.target.value);
  };

  const handleSortChange = (e) => {
    // Save the selected sorting option in localStorage
    localStorage.setItem("sortOption", e.target.value);
    setSortOption(e.target.value);
  };
  const handleDropDown = () => {
    setIsDropDownSelected(!isDropDownSelected);
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        className="primary-button cursor-pointer"
        style={{ display: "flex", columnGap: "5px" }}
        onClick={handleDropDown}
      >
        <FilterIcon />
        <h4 style={{ fontSize: "14px" }}>Display</h4>
        <DownArrowIcon />
      </div>
      {isDropDownSelected && (
        <div
          className="primary-button "
          style={{
            display:'flex',
            flexDirection:'column',
            padding: "12px 22px",
            position: "absolute",
            borderRadius: "6px",
            maxWidth: "280px",
            width: "100%",
            top: "40px",
            background: "#F8F9FB",
            zIndex: 99,
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <label htmlFor="group" className="text-gray">
              Grouping
            </label>
            <select
              value={displayOption}
              onChange={handleDisplayChange}
              className="secondary-button"
              name="group"
              id="group"
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              marginTop: "8px",
            }}
          >
            <label htmlFor="order" className="text-gray">
              Ordering
            </label>
            <select
              value={sortOption}
              onChange={handleSortChange}
              className="secondary-button"
              name="order"
              id="order"
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoFilter;
