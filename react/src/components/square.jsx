import React from 'react'
export default function Square(props){

    return(

        <button className={this.state.choosenSquare} onClick={props.onClick}>
            {props.value}
        </button>
    )
}