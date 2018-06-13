import React, { Component } from 'react'
import * as API from "../utils/API"
import {Redirect} from 'react-router-dom'
import axios from 'axios'

export default class Door extends Component {

    state = {
        door: {
            id:null,
            name:null
        },
        redirect:false
    }

    deleteDoor(){
        const doorId = this.props.match.params.doorId
        axios.delete(`http://localhost:8090/door/${doorId}`).then(response => {
            console.log('delete', doorId)
            // this.setState({})
        })
    }


componentWillMount = () => {
const doorId = this.props.match.params.doorId
  API.getDoor(doorId).then(response => {
      if(response ===!200) {
          console.log("Error: ", response.data.error)
      } else {
          const door = response.data
          this.setState({door})
      }
  })
}

  render() {

      const { door, redirect } = this.state

      if( redirect ){
          return (<Redirect to={`/doors`}/>)
      }
    return (
      <div>
          <div>
          <h4>Selected Door</h4>
          <h3>{door.name}</h3>
          </div>
          <div>
              <a href={`/doors`}> <button>Back</button> </a>
                <button onClick={ this.deleteDoor() }> Delete </button>
          </div>
      </div>
    )
  }
}
