import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './App';

ReactDOM.hydrate(
    <App compiler='TypeScript' framework='React' />,
    document.getElementById('app')
);

export { App };
