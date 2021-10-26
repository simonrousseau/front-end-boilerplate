import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Project from './Project';
import Roadmap from './Roadmap';
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/project">Project</Link>
                            </li>
                            <li>
                                <Link to="/roadmap">Roadmap</Link>
                            </li>
                        </ul>
                    </nav>

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
                </div>
            </Router>
        </div>
    );
}

export default App;
