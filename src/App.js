import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import BaseForm from './components/BaseForm/BaseForm';
import Section from './utils/Section/Section';
import HeaderSection from './components/HeaderSection/HeaderSection';
import ListContacts from './components/ListContacts/ListContacts';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formHandlerSubmit = event => {
    event.preventDefault();
    this.setState(pervState => {
      return this.state.contacts
        ? {
            contacts: [
              ...pervState.contacts,
              { id: nanoid(), name: pervState.name },
            ],
          }
        : { contacts: [...pervState.contacts] };
    });
  };

  inputHandler = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <>
        <HeaderSection />
        {console.log(this.state)}
        <Section title="">
          <BaseForm
            fnSubmit={this.formHandlerSubmit}
            fnInput={this.inputHandler}
            nameValue={this.state.name}
          />
        </Section>
        <Section title="Contacts">
          <ListContacts contacts={this.state.contacts} />
        </Section>
      </>
    );
  }
}

export default App;
