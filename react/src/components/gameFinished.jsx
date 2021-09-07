import React,{Component} from 'react';
import axios from "axios";

class GameFinished  extends Component {
    nextRound() {
        var url="http://localhost:80/tic-tac-toe/php/board/nextRound.php"

        axios.post(url, {
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
render()
    {
        if (this.props.winner != null && this.props.winner == this.props.player_turn) {
            if(this.props.playerType!="host") {
                return (<h1 className="text-success">You had won :3</h1>)
            }
            else{
                return (<><h1 className="text-success">You had won :3</h1><button className='btn btn-outline-light my-1' onClick={this.nextRound}>Play again</button></>)
            }
        }
        if (this.props.winner != null && this.props.winner != this.props.player_turn) {
            if(this.props.playerType!="host") {
                return (<h1 className="text-danger">You had lost :c</h1>)
            }
            else{
                return (<><h1 className="text-danger">You had lost :c</h1><button className='btn btn-outline-light my-1' onClick={this.nextRound}>Play again</button></>)
            }
        }
        if (this.props.winner == null) {
            return (<h1>Game in progress...</h1>)
        }

        return (<h1>poggg</h1>)
    }

}
export default GameFinished;