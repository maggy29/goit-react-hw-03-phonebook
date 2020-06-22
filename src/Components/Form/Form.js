import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Form.module.css";

class Form extends Component {
  static propTypes = { onAddContact: PropTypes.func.isRequired };

  state = {
    name: "",
    number: "",
  };

  handlerInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handlerSubmit = (e) => {
    e.preventDefault();
    this.props.onAddContact(this.state);
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.container} onSubmit={this.handlerSubmit}>
        <label className={styles.label}>
          Name <br />
          <input
            type="text"
            value={name}
            onChange={this.handlerInputChange}
            name="name"
          />
        </label>
        <label className={styles.label}>
          Number <br />
          <input
            type="tel"
            value={number}
            onChange={this.handlerInputChange}
            name="number"
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
