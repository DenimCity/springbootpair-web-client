import React, { Component } from 'react'
import * as API from "../utils/API"
import DoorTable from "./DoorTable"
import axios from 'axios'

export default class DoorsList extends Component {

    state = {
        doors: [],
    }
    



    getDoors(){
        axios.get('http://localhost:8080/door').then(response => {
        console.log('response'+ response); 
            const doors = response.data
            this.setState({doors})
    })
    }
    componentWillMount() {
        this.getDoors()
        // API.getAllDoors().then(response => {
        //     if (response.status === !200) {
        //         window.alert('Error: Server is down!!', response.data.error)
        //     } else {
        //         // this.setState({ doors })
        //     }
        // })
    }

    render() {

        return (
            <div>
                {/* <a href="doors/create">
            <button> Create Door</button>
        </a> */}
                <div>
                   {this.state.doors.map((door, i)=> {
                       return(
                           <div>
                               {door.name}
                           </div>
                       )
                   })}
                    {/* <DoorTable doors={this.state.doors} /> */}
                </div>
            </div>
        )
    }
}
