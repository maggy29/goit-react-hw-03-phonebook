import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

function Filter({ value, onFilter }) {
  return (
    <label className={styles.container}>
      Find contact by name <br />
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
