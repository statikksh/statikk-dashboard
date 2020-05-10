import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from './global-styles';
import Router from './routes';

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <Router />
    </React.StrictMode>,
    document.getElementById('root')
);
