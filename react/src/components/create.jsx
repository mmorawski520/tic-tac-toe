import React, {Component} from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
class Create extends Component {


    handleAdd=param => async e =>{
        const url = "http://localhost:80/tic-tac-toe/createGame.php";
         this.state.isStarting=param

        axios.post(url, {
             isPrivate:this.state.isPrivate,
             isStarting:this.state.isStarting
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(response => {

                this.setState({ redirect: "/"+response.data });

            });

    }
    handleSwitch = e =>{

        this.state.isPrivate=!this.state.isPrivate
        console.log(this.state.isPrivate)
    }
    constructor(props) {
        super(props);
        this.state={
            visible:false,
            isPrivate:false,
            isStarting:false,
            redirect: null

        };

    }

    changeVisibility(bool) {
        this.setState({
            visible: bool
        });
    }

    render() {
        const style={
            backgroundColor:"#000000",
            borderRadius:"5px",
            color:"#CCC9DC"
        }

        const create = (
            <div className=" h-50 d-flex justify-content-center align-items-center">
                <div style={style} className="px-5 py-2">
                    <div className="form-check form-switch col-12">
                        <div className="px-5 my-4">
                            <label className="form-check-label" htmlFor="private-switch">Private</label>
                            <input className="form-check-input " type="checkbox" id="private-switch" onChange={this.handleSwitch} />
                        </div>
                    </div>
                    <h1>Do u wanna start</h1>
                    <div className="row my-5">

                        <div className="col-6"><button className="btn btn-lg btn-outline-success" onClick={this.handleAdd(true)}>Yes</button></div>
                        <div className="col-6"><button className="btn btn-lg btn-outline-danger" onClick={this.handleAdd(false)}>No</button></div>
                    </div>
                </div>
            </div>
        )
        if (this.state.redirect) {

            return <Redirect to={{pathname: this.state.redirect, state:{gameCode:this.state.redirect}}} />};
        return (

            create

        );
    }
}
export default Create;