import React from "react";
import styles from "./Contact.module.css";

function Contact({ id, name, number, onRemove }) {
  return (
    <li className={styles.container} key={id}>
      <p>
        {name}: {number}
      </p>
      <button className={styles.button} type="button" onClick={onRemove}>
        Delete
      </button>
    </li>
  );
}

export default Contact;
