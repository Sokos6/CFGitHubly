import React, { Component } from 'react'

class FetchConnect extends Component {
  componentDidMount() {
    const apiUrl = 'https://api.github.com/users/Sokos6/repos';
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => console.log('This is your data', data));
  }
  render() {
    return <h1>Check the console.</h1>
  }
}

export default FetchConnect;