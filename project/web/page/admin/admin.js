require("./admin.less");
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute, IndexRedirect} from 'react-router';
import 'antd/dist/antd.css'
import rootRoute from "./routes/router.js"
render((<Router history={hashHistory} routes={rootRoute} />), document.getElementById("app"))