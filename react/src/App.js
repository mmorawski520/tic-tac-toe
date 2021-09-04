
import './App.css';
import Main from './components/App';
import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component{

  render(){

    const style={
      backgroundColor:"#e5e5f7",
      opacity: "0.8",
      background: "repeating-linear-gradient( 45deg, #0C1821, #0C1821 5px, #324A5F 5px, #324A5F 25px",
      height: "100vh",
      padding:"30vh 0 50vh 0",
    };
    return(

        <div className="App bg-image" style={style} >
          <Main/>
        </div>
    );
  }
}


export default App;
