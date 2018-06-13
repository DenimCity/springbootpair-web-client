import React, { Component } from 'react'
import axios from 'axios'

export default class DoorForm extends Component {

    state = {
        newDoor: {
            name:'undefined'
        }
    }



    createDoor(){
        const payload = this.state.newDoor
        axios.post(`http://localhost:8090/door/new`, payload).then(response => {
            console.log('response', response)
            console.log('response', response.data)
        })
    }

    handleChange = (e) => {
        const attribute = e.target.name
        const value =  e.target.value
        const newDoor = {...this.state.newDoor}
        newDoor[attribute] = value
        this.setState({newDoor})
          }

          handleSubmit = (e) => {
            e.preventDefault()
            this.createDoor()
        }

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
          <input
          type="text"
          onChange={this.handleSubmit}
          name="name"
          value={this.state.newDoor.name}
          required
          placeholder="Insert Door Name"
          />
        <submit>Submit</submit>
          </form>
      </div>
    )
  }
}
