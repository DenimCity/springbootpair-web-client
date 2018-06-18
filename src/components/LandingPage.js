import React, { Component } from 'react'
import Modal from "react-responsive-modal";


export default class LandingPage extends Component {

    state = {
        open:false
       }

       onOpenModal = () => {
        this.setState({ open: true });
      };
    
      onCloseModal = () => {
        this.setState({ open: false });
      };


  render() {
    const { open } = this.state

    return (
      <div>
          <h1 className="App-title"> Home Depot</h1>
          <button onClick={ this.onOpenModal }>Welcome </button>
          <Modal open={open} onClose={ this.onCloseModal } little>
          <h1>Welcome To Doors Warehouse</h1>
          <p>
            Random words go here in the  modal.
          </p>
        </Modal>
        <div>
            <div>
                <a href={`/doors/create`}>
                    <button>Create Door</button>

                </a>
            </div>
        <a href="/doorlist">
          <button>
            View Doors
          </button>
          </a>

        </div>

        <div>

        </div>

        
      </div>
    )
  }
}
