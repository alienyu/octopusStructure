require("./bizA.less");
import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Route } from 'react-router-dom';
import 'antd/dist/antd.css'
import Second from './routes/second/second.jsx'

function home() {
    return <h2>home page</h2>
}


render(
    <HashRouter>
        <Route path="/" exact component={home}></Route>
        <Route path="/second/:id" component={Second}></Route>

    </HashRouter>
, document.getElementById("app"))
