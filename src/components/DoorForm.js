import React, { Component } from 'react'
import axios from 'axios'
import {Redirect, Link} from 'react-router-dom'

export default class DoorForm extends Component {

    state = {
            name:'',
            redirect:false
        }
    


    handleChange = (e) => {
    e.preventDefault()  
    console.log(e.target.value)
    this.setState({ [e.target.name]: e.target.value })
          }

    handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:8090/door/new`, this.state)
    .then(res => {
        this.setState({ name: res.data, redirect: true })
        })
    }

  render() {
      if(this.state.redirect){
          return <Redirect to='/doorlist'/>
      }
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
          <div>
            <input
              onChange={this.handleChange}
              name="name"
              placeholder="Create Door"
              type="text"
              value={this.state.name} />
          </div>
          <input type="submit" value="Submit"/>
          <Link to="/doors">
          </Link>
        </form>
      </div>
    )
  }
}
