import { Component } from 'react';
import './modal.css';

export default class Modal extends Component {
    state = {
        isOpen: false
    }

    render() {
        return (
            <div className="modal-btn">
                <button onClick={() => this.setState({isOpen: true})}>
                    Open Modal
                </button>

                {this.state.isOpen && <div className="modal">
                    <div className="modal-body">
                        <h1>Modal Title</h1>
                        <p>I am awesome modal!</p>
                        <button onClick={() => this.setState({isOpen: false})}>Close Modal</button>
                    </div>
                </div>}
            </div>
        )
    }
}