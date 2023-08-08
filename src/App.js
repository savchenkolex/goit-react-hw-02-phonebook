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
    number: '',
  };

  formHandlerSubmit = event => {
    event.preventDefault();
    this.setState(pervState => {
      return this.state.contacts
        ? {
            contacts: [
              ...pervState.contacts,
              { id: nanoid(), name: pervState.name, number: pervState.number },
            ],
          }
        : { contacts: [...pervState.contacts] };
    });
    this.setState({name:'', number:'' })
  };

  inputHandler = event => {

    const key = event.target.name;
    const val = event.target.value;
    this.setState({ [key]: val });
  };

  render() {
    return (
      <>
        <HeaderSection />
        {console.log(this.state)}
        <Section title="Add New Contact">
          <BaseForm
            fnSubmit={this.formHandlerSubmit}
            fnInput={this.inputHandler}
            nameValue={this.state.name}
            telValue={this.state.number}
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
