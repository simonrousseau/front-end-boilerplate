import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    BrowserRouter,
    Routes,
} from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Home from './Home';
import Project from './Project';
import Roadmap from './Roadmap';
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className="flex flex-col h-screen justify-between">
                    <Navigation />

                    <Routes>
                        <Route path="/project" element={<Project />} />
                        <Route path="/roadmap" element={<Roadmap />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
