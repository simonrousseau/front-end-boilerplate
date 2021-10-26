import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Home from './Home';
import Project from './Project';
import Roadmap from './Roadmap';
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <div className="flex flex-col h-screen justify-between">
                    <Navigation />

                    <Switch>
                        <Route path="/project">
                            <Project />
                        </Route>
                        <Route path="/roadmap">
                            <Roadmap />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                    <Footer />
                </div>
            </Router>
        </div>
    );
}

export default App;
