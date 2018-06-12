import React, { Component } from 'react'
import * as API from "../utils/API"

export default class Door extends Component {

    state = {
        door: {
            id:null,
            name:null
        }
    }

componentWillMount = (payload) => {
  API.getDoor(payload).then(response => {
      if(response ===!200) {
          console.log("Error: ", response.data.error)
      } else {
          const door = response.data
          this.setState({door})
      }
  })
}

  render() {
      const { door } = this.state
    return (
      <div>
          <div>
          <h4>Selected Door</h4>
          <h3>{door.name}</h3>
          </div>
          <div>
              <a href={`/doors`}> Back </a>
          </div>
      </div>
    )
  }
}
