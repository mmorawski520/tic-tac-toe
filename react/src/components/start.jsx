import React, {Component} from 'react';
import {

    Link
} from 'react-router-dom';
import ReactDOM from 'react-dom'


class Start extends Component {
    constructor(props) {
        super(props);
        this.state={
            visible:true
        };

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
                    <h1>What do u want</h1>
                    <div className="row my-5">
                        <div className="col-6"><Link className="btn btn-lg btn-outline-success" to="/create">Create a game</Link></div>
                        <div className="col-6"><Link className="btn btn-lg btn-success"  to="/join">Join a game</Link></div>
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
export default Start;