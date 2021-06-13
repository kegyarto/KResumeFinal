import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StartingPage from './startingpage';
import AboutMe from './aboutme';
import ContactPage from './contactpage';
import ResumePage from './resumepage';




const Main = () => (
    <Switch>
        <Route exact path = "/" component = {StartingPage} />
        <Route path = "/aboutme" component = {AboutMe} />
        <Route path = "/contactpage" component = {ContactPage} />
        <Route path = "/resumepage" component = {ResumePage} />
    </Switch>
)

export default Main;