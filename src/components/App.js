import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/index.css'

import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import MemeItem from './MemeItem';
import MyMemes from './MyMemes'


class App extends Component {
  constructor(){
    super();

    this.state = { //text0 is the API's key for top text. text1 being bottom text
      memeLimit: 10,
      text0: '',
      text1: ''
    }
  }
  render() {
    return (
      <div>
        <h1><u>Create Your Own Meme</u></h1>
        {/* <h3>INSTRUCTIONS</h3> */}
        <ul class="instructions-list">
          <li>1. Type your funny punchlines into the 2 text boxes below</li>
          <li>2. Click "10 more images" to browse through collection of 100+ memes</li>
          <li>3. Select funniest image. Copy completed meme and share with friends!</li>
        </ul>
        <MyMemes />
        <h4><i>Write Some Text</i></h4>
        <Form inline>
          <FormGroup>
            <ControlLabel>Top</ControlLabel>
            {''}
            <FormControl
              type="text"
              placeholder="top text here"
              onChange={event => this.setState({ text0: event.target.value })}
            ></FormControl>
          </FormGroup>
          {''}
          <FormGroup>
            <ControlLabel>Bottom</ControlLabel>
            {''}
            <FormControl
              type="text"
              placeholder="bottom text here"
              onChange={ event => this.setState({ text1: event.target.value })}
            >
            </FormControl>
          </FormGroup>
        </Form>
        <div className='meme-button' onClick={() => {
          this.setState({ memeLimit: this.state.memeLimit + 10 })
        }}>Load 10 more images...
        </div>
        {
          this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
            return(
              <MemeItem
                key={index}
                meme={meme}
                text0={this.state.text0}
                text1={this.state.text1}
              />
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}



export default connect(mapStateToProps, null)(App);