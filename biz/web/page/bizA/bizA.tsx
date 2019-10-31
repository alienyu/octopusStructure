require("./bizA.less");
import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react';
import stores from '@webMobx/index';

import App from './index';

declare const module:any;
render(
    <Provider { ...stores }>
        <App />
    </Provider>,
    document.getElementById("app")
);

if (module['hot']) {
    module['hot'].accept();
}
