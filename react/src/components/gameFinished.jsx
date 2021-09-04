import React,{Component} from 'react';

//export default function gameFinished(props){
class GameFinished  extends Component {
render()
    {
        if (this.props.winner != null && this.props.winner == this.props.player_turn) {
            return (<h1 className="text-success">You had won :3</h1>)
        }
        if (this.props.winner != null && this.props.winner != this.props.player_turn) {
            return (<h1 className="text-danger">You had lost :c</h1>)
        }
        if (this.props.winner == null) {
            return (<h1>Game in progress...</h1>)
        }

        return (<h1>poggg</h1>)
    }

}
export default GameFinished;