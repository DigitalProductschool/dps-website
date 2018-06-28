import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './Hello';

ReactDOM.hydrate(
    <Hello compiler='TypeScriptt' framework='React' />,
    document.getElementById('app')
);

export { Hello };
