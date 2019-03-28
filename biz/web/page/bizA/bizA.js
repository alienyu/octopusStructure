require("./bizA.less");
import React from 'react'
import { render } from 'react-dom'
import 'antd/dist/antd.css'
import Index from './index.js';

render(
    <Index />,
    document.getElementById("app")
);
