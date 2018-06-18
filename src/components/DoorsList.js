import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as API from "../utils/API"
import DoorTable from "./DoorTable"
import axios from 'axios'

export default class DoorsList extends Component {

    state = {
        doors: [],
    }

    componentWillMount() {
        API.getAllDoors().then(response => {
            if (response.status === !200) {
                window.alert('Error: Server is down!!', response.data.error)
            } else {
                const doors = response.data
                this.setState({ doors })
            }
        })
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.doors.map((door, i) => {
                        return (
                            <div key={i}>
                            <Link to={`/doors/${door.id}`}>{door.name}</Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
