import React, {Component} from 'react';
import {

    Link
} from 'react-router-dom';
import ReactDOM from 'react-dom'
import {Button} from "bootstrap";
import axios from "axios";
import Loader from "react-loader-spinner";
import GameFinished from "./gameFinished";
class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameLink: window.location.href,
            gameCode: window.location.pathname.substr(1,),
            isGameExisting: false,
            isReady:false,
            visible: true,
            player_turn:'X',
            board:["","","","","","","","",""],
            currentStyle:"waitSquare",
            canMove:false,
            winner:null,
        };
        this.liveUpdate = this.liveUpdate.bind(this);
    }
    setupBeforeUnloadListener = () => {

        window.addEventListener("beforeunload", (ev) => {
            const url = "http://localhost:80/tic-tac-toe/playerLeaving.php";
            axios.post(url, {
                gameCode: window.location.pathname.substr(1,),

            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })

        });
    };

     handleCopyToClipBoard = () => {
        navigator.clipboard.writeText(this.state.gameLink);
    }
    handleChangeSign=(e)=>{
         this.setState({player_turn:e})
    }
    handleChangeGameStatus =(e)=>{
         this.setState({'isReady':e})
    }
    handleChangeBoard=(e)=>{
        this.setState({'board':e})

    }
handleChangeWinner=(e)=>{
         this.setState('winner':e)
}
    handleChangeCanMove =(e)=>{

        if(e==true){
            this.setState({'canMove':e, currentStyle:"square"})
        }
        else{
            this.setState({'canMove':e, currentStyle:"waitSquare"})
        }
    }
    postMove=()=>{
       var data={
            "gameCode":window.location.pathname.substr(1,),
            "board":this.state.board
        }


        fetch('http://localhost:80/tic-tac-toe/detectMove.php', {
            method: 'POST',
            body: JSON.stringify(data),
        }).then((response)=>{
            return response.json();
        }).then((data)=>{


            this.handleChangeGameStatus(data.isReady)
            this.handleChangeCanMove(data.whoCanMove)
        }).catch((error)=>{
            console.log(error)
        });
    }
    squareClicked=(index)=>{
         let player_turn = this.state.player_turn;
         let board = this.state.board;


        if(board[index]!="X" && board[index]!="0" && this.state.canMove==true){
        board[index]=player_turn;


         player_turn=(player_turn =="X")?"0":"X";

        var currentSquare=document.getElementById(index);
        currentSquare.classList.remove("square");
        currentSquare.classList.add("choosenSquare");
         this.setState({player_turn:player_turn,
                             board:board,
                             currentStyle:"waitSquare",
                             canMove:false

             },

             )
            this.postMove()
            }

    }
    liveUpdate=()=>{
         var data={

             "gameCode":window.location.pathname.substr(1,)
         }

        setInterval(()=>{

             fetch('http://localhost:80/tic-tac-toe/isGameReady.php', {
                 method: 'POST',
                 body: JSON.stringify(data),
             }).then((response)=>{
                 return response.json();
             }).then((data)=>{
                 console.log(data)
                 this.handleChangeSign(data.sign)
                 this.handleChangeGameStatus(data.isReady)
                 this.handleChangeCanMove(data.whoCanMove)
                 if(data.board!=null){
                 this.handleChangeBoard(data.board)}
                 this.handleChangeWinner(data.winner)
             }).catch((error)=>{
                 console.log(error)
             });

        },2000);
    }
    componentDidMount=()=> {
        this.setupBeforeUnloadListener();
        this.liveUpdate();
        const url = "http://localhost:80/tic-tac-toe/isGameExisting.php";
        const join_url="http://localhost:80/tic-tac-toe/playerJoining.php";

        axios.post(url, {
            gameCode: window.location.pathname.substr(1,),

        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(response => {

                this.setState({isGameExisting: response.data})

            });
        axios.post(join_url, {
            gameCode: window.location.pathname.substr(1,),

        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(response => {
                console.log(response.data)
            });

    }
    render() {


        const style = {
            backgroundColor: "#000000",
            borderRadius: "5px",
            color: "#CCC9DC",



        }



        const game = (
            <div className=" h-50 d-flex justify-content-center align-items-center">
                <div style={style} className="px-5 py-2">
                    <h1>Your game is almost ready :D</h1>
                    <div className="row my-1">
                        <div className="row my-5">
                            <div className="col-6">
                                <button className='btn btn-lg btn-outline-light my-1'
                                        onClick={this.handleCopyToClipBoard}>Copy to clipboard
                                </button>
                                <h3>Code </h3>
                                <h3 id='#code'>{this.state.gameCode}</h3>

                            </div>
                            <div className="col-6">Waiting for second player
                                <Loader
                                    type="spin"
                                    color="#EEEEEE"
                                    height={100}
                                    width={100}

                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
        const notFound=(
            <div className=" h-50 d-flex justify-content-center align-items-center">
                <div style={style} className="px-5 py-2">
                   Game not found :c
                </div>
            </div>
        )
        const board=(
            <>
                <div className=" h-50 d-flex justify-content-center align-items-center">
                    <div style={style} className="px-5 py-2">
                       <h1>It's actually working game</h1>
                        <div className="row">
                            <div className="col-10 ">

                                <div className="board box">
                                    {this.state.board.map((square,index)=>{
                                        return(<div id={index}onClick={()=>this.squareClicked(index)} className={this.state.currentStyle}>{square}</div>)
                                    })}

                                </div>
                            </div>
                            <div className="col-2">
                                <GameFinished {...this.state}></GameFinished>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )

        if (this.state.isGameExisting) {
            if(!this.state.isReady){
           return game
            }
            else{
                return board
            }
        }
       else{
           return notFound
        }

    }

}

export default Game;