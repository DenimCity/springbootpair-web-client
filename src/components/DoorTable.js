import React, { Component } from 'react'

export default class DoorTable extends Component {
    render() {
        return (
            <div>
                <h1>Doors List</h1>
                <table width="100%">
                    <body>
                        <tr>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Link</th>
                        </tr>
                        {this
                            .props
                            .doors.map((door, index) => {
                                return (
                                    <tr>
                                        <td key={index}> <h5 >{door.name}</h5> </td>
                                        <td><h5> {door.id}</h5></td>
                                        <td> <h5> <a href={`/doors/${door.id}`} target="blank"> Click Here</a></h5> </td>
                                    </tr>)
                            })}
                    </body>
                </table>
            </div>
        )
    }
}
