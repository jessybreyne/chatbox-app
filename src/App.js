import React, { Component, createRef } from 'react'
import './App.css'

import Formulaire from './components/Formulaire'
import Message from './components/Message'

// Firebase
import base from './base'

class App extends Component {

  state = {
    messages : {},
    pseudo: this.props.match.params.pseudo
  }

  messagesRef = createRef()

  componentDidMount () {
    base.syncState('/', {
      context: this,
      state: 'messages'
    })
  }

  componentDidUpdate () {
    const ref = this.messagesRef.current
    ref.scrollTop = ref.scrollHeight
  }

  addMessage = message => {
    const messages = { ...this.state.messages }
    messages[`message-${Date.now()}`] = message
    this.setState({ messages })
  }

  render () {

    const messages = Object
      .keys(this.state.messages)
      .map(key => (
        <Message
          pseudo={this.state.messages[key].pseudo}
          message={this.state.messages[key].message}
          key={key}
        >

        </Message>
      ))

    return (
      <div className='box'>
        <div>
          <div className="messages" ref={this.messagesRef}>
            { messages }
          </div>
        </div>
        <Formulaire
          length={140}
          addMessage={this.addMessage}
          pseudo={this.state.pseudo}
        />
      </div>
    )
  }
}

export default App
