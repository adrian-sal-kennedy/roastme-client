import React from 'react';
import { Route, Switch } from "react-router-dom";
import test from './test';

export default class App extends React.Component {
    render() {
        return(
            <>
                <Switch>
                    <Route exact path="/test" component={test} />
                </Switch>
            </>
        )
    }
}