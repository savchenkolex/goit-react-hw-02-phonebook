import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import BaseForm from './components/BaseForm/BaseForm';
import Section from './utils/Section/Section';
import HeaderSection from './components/HeaderSection/HeaderSection';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formHandlerSubmit = (event) => {
    event.preventDefault();
    console.log(event)
    console.log(nanoid());
  }

  render() {
    return (
      <>
      <HeaderSection />
      <Section title="">
      <BaseForm fnSubmit={this.formHandlerSubmit} />
      </Section>
      <Section title="Contacts">
      <div>brbrbr</div>
      </Section>
      </>
    );
  }
}

export default App;
