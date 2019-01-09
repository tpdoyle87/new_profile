import React, { Component } from 'react'
import ContactForm from './components/ContactForm'
import LetsTalk from './components/LetsTalk'

export default class ContactPage extends Component {

  render() {
    return(
      <div className="content-container">
        <LetsTalk />
        <ContactForm />
      </div>
    )
  }
}
