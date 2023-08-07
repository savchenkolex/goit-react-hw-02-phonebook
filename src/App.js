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
    console.log(event);
    this.setState(pervState => {
      if (pervState.contacts.length) {
        console.log(pervState.contacts.length);
        console.log("lsdj;kfa");
      } else {
        const contactArr = [
          {
            id: nanoid(),
            name: pervState.name,
          },
        ]

        this.setState({
          contacts: contactArr,
        });
      }
      
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
          />
        </Section>
        <Section title="Contacts">
          <ListContacts />
        </Section>
      </>
    );
  }
}

export default App;
