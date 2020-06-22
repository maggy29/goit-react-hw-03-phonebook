import React, { Component } from "react";

import { ToastContainer, toast } from "react-toastify";
import { uuid } from "uuidv4";

import Form from "./Form/Form";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

import "react-toastify/dist/ReactToastify.css";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handlerAddContact = ({ name, number }) => {
    const contact = {
      id: uuid(),
      name: name,
      number: number,
    };

    const atList = this.state.contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    atList
      ? toast.info(`${name} is already in contacts!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      : this.setState((prevState) => {
          return {
            contacts: [...prevState.contacts, contact],
          };
        });
  };

  handlerFilter = (filter) => {
    this.setState({ filter });
  };

  handlerVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handlerRemoveContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(
          (contact) => contact.id !== contactId
        ),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.handlerVisibleContacts();
    return (
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
        <h1>Phonebook</h1>
        <Form onAddContact={this.handlerAddContact} />
        {contacts.length > 1 && (
          <Filter onFilter={this.handlerFilter} value={filter} />
        )}
        {contacts.length > 0 && <h2>Contacts</h2>}
        <ContactList
          contacts={visibleContacts}
          onRemoveContact={this.handlerRemoveContact}
        />
      </div>
    );
  }
}
