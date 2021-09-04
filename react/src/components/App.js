import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Start from './start';
import Create from './create';
import Join from './join';
import Game from './game';
class Main extends Component {
    render() {
        return (
            <Router>
                <div className="container">


                    <Route exact path="/" component={Start} />
                    <Route path="/create" component={Create} />
                    <Route path="/join" component={Join} />
                    <Route path="/g*" component={Game} />
                </div>
            </Router>
        );
    }
}

export default Main;