import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from './views/signin';
import SignUp from './views/signup';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/signin">
                    <SignIn />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
