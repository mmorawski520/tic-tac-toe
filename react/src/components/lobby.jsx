import React,{Component} from 'react';
import Loader from "react-loader-spinner";

class Lobby extends Component {
handleCopyToClipBoard = () => {
        navigator.clipboard.writeText(this.props.gameLink);
    }
render()
    {

const style = {
            backgroundColor: "#000000",
            borderRadius: "5px",
            color: "#CCC9DC",



        }

                const lobby = (
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
                                        <h3 id='#code'>{this.props.gameCode}</h3>

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
                return lobby
    }

}
export default Lobby;