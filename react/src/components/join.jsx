import React, {Component} from 'react';
import {

    Link
} from 'react-router-dom';
import ReactDOM from 'react-dom'
import {Button} from "bootstrap";


class Join extends Component {
    constructor(props) {
        super(props);
        this.state={
            visible:true,
            gameCode:"",
        };

    }

    handleChange = (e) => {
        this.setState({gameCode:e.target.value})

    }
    handleClick() {
        window.location = this.state.gameCode
    }
    render() {
        const style={
            backgroundColor:"#000000",
            borderRadius:"5px",
            color:"#CCC9DC"
        }

        const start = (
            <div className=" h-50 d-flex justify-content-center align-items-center">
                <div style={style} className="px-5 py-2">
                    <h1>Select correct option</h1>
                    <div className="row my-5">
                        <div className="row my-5">
                            <div className="col-6"> <input type='text' id='code-input'placeholder='Enter your code' onChange={this.handleChange}/><button className='btn btn-outline-light mt-1'  onClick={() => this.handleClick()}>Join</button></div>
                            <div className="col-6"> <button className='btn   btn-outline-light'  >Join to public game</button></div>
                        </div>
                    </div>
                </div>
            </div>
        )
        if (!this.state.visible) return null;
        return (

            start

        );
    }
}
export default Join;