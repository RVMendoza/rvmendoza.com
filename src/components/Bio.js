import React from 'react'

import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render() {
    return (
      <p>
        <img
          src={profilePic}
          alt={`Kyle Mathews`}
        />
        Written by <strong>RV Mendoza</strong> who lives and works in Detroit building useful things.{' '}
        <a href="https://twitter.com/rvxmendoza">
          You should follow him on Twitter
        </a>
      </p>
    )
  }
}

export default Bio
