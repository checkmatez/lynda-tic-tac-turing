import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const AuthButton = ({ authenticated, auth }) => {
  if (authenticated) {
    return (
      <RaisedButton
        label="Logout"
        onTouchTap={auth.logout}
        fullWidth
        secondary
      />
    )
  } else {
    return (
      <RaisedButton
        label="Login / Signup"
        onTouchTap={auth.showLock}
        fullWidth
        primary
      />
    )
  }
}

export default AuthButton
