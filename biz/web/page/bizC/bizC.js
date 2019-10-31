require("./bizC.less");
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react';
import stores from '@web-mobx';

import Index from './index.jsx';

render(
    <Provider { ...stores }>
        <Index />
    </Provider>,
    document.getElementById("app")
);

if (module.hot) {
    module.hot.accept();
}
