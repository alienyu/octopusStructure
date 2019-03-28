import React from "react";
import { HashRouter, Route, Link } from 'react-router-dom';
import About from './about.js';
import Video from './video.js';
import Login from './login.js';

export default class App extends React.Component {
    render() {
        return (
            <HashRouter>
                    <Route exact path="/" component={Home} />
                    <Route path="/video" component={Video} />
                    <Route path="/about" component={About} />
                    <Route path="/login" component={Login} />
            </HashRouter>
        );
    }
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}