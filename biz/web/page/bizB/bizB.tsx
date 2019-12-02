require("./bizB.less");
import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react';
import stores from '@webMobx/index';
import Index from './index.jsx';

render(
    <Provider { ...stores }>
        <Index />
    </Provider>,
    document.getElementById("app")
);
