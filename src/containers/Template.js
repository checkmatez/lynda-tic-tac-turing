import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventProvider from 'react-tap-event-plugin'
import RaisedButton from 'material-ui/RaisedButton'

injectTapEventProvider()

class Template extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <header>
            <h1>TicTacTuring</h1>
            <RaisedButton
              label="Test button"
              primary
              onTouchTap={() => {
                console.log('working!')
              }}
            />
          </header>
          <main>
            {this.props.children}
          </main>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Template
