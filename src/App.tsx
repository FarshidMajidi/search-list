import React from 'react';
import './App.css';
import {Route, Switch} from "react-router";
import {ScreenList} from "./screen-list/screen-list";

function App() {

    return (
        <>
            <Switch>
                <Route path="/" exact component={ScreenList}/>
            </Switch>
        </>
    );
}

export default App;
