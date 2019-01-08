import React from 'react'
import database  from '../../firebase/firebase'


class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      message: "",
      error: undefined,
      saved: undefined
    }
  }

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }))
  }

  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({ email }))
  }

  onMessageChange = (e) => {
    const message = e.target.value;
    this.setState(() => ({ message }))
  }

  onSubmit = (e) => {
    e.preventDefault()
    if( !this.state.email || !this.state.message) {
      this.setState(() => ({
        error: "Please provide a message and your email"
      }))
    } else {
      this.setState(() => ({
        error: undefined
      }))
      database.ref('contacts').push({
        email: this.state.email,
        name: this.state.name,
        message: this.state.message
      }).then(() => {
        this.setState(() => ({
          email: "",
          name: "",
          message: "",
          saved: "Your message is on its way!"
        }))
      })
    }

  }



  render() {
    return(
      <div className="form-page" action="POST">
        <form className="form" onSubmit={this.onSubmit}>
          <div>
            {this.state.error && <p>{this.state.error}</p>}
            {this.state.saved && <p>{this.state.saved}</p>}
          </div>
          <div className="inputs">
            <label htmlFor="name">Full Name:</label>
            <input
              className="text"
              id="name"
              onChange={this.onNameChange}
              type="text"
              placeholder="Full name"
              value={this.state.name}
              autoFocus
            />
          </div>
          <div className="inputs">
            <label htmlFor="email">Email:</label>
            <input
              className="text"
              id="email"
              onChange={this.onEmailChange}
              type="text"
              placeholder="John.Doe@gmail.com"
              value={this.state.email}
            />
          </div>
          <div className="inputs">
            <label htmlFor="message">Message:</label>
            <textarea
              className="message"
              id="message"
              onChange={this.onMessageChange}
              placholder="Hello..."
              value={this.state.message}
            />
          </div>
          <div>
            <button className="contact-button-submit">Submit</button>
          </div>
        </form>
      </div>

    )
  }
}

export default ContactForm
