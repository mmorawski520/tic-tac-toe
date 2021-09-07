import React, {Component} from 'react';
import axios from "axios";
import ReactDOM from 'react-dom'
import {Button} from "bootstrap";


class PublicGames extends Component {
    constructor(props) {
        super(props);
        this.state={

            games:[],
        };

    }

    handleClick(e) {
       // this.setState({gameCode:e.target.value})
        window.location =e.target.value
    }

    componentDidMount=()=> {
        var url="http://localhost:80/tic-tac-toe/php/board/getPublicGames.php"

        axios.post(url, {
            gameCode: window.location.pathname.substr(1,),

        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(response => {
                console.log(response.data)
                this.setState({"games":response.data})
            });
    }

    render() {
        let items=(this.state.games);
        console.log(this.state.games)
        const  itemList = Object.entries(items).map(([key, value])  =>  {
            return  (

                   <button className="btn btn-outline-light mx-2"  value={value} onClick={this.handleClick}> {value}</button>

            );
        });
        const style={
            backgroundColor:"#000000",
            borderRadius:"5px",
            color:"#CCC9DC"
        }
        const list=(
            <div style={style} className="py-3"><h1 className="pb-4">List Of Public Lobbies</h1> {itemList}</div>
        )
        return list

    }
}
export default  PublicGames;