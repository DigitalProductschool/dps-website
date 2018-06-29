import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './Hello';

ReactDOM.hydrate(
    <Hello compiler='TypeScript' framework='React' />,
    document.getElementById('app')
);

export { Hello };
