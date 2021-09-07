import React,{Component} from 'react';


class notFound extends Component {
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
        const notFound=(
            <div className=" h-50 d-flex justify-content-center align-items-center">
                <div style={style} className="px-5 py-2">
                    Game not found :c
                </div>
            </div>
        )
        return notFound

    }

}
export default  notFound ;