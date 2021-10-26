import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation';

export default {
    component: Navigation,
    title: 'Components/Navigation',
};

export const NavigationMenu = () => (
    <Router>
        <Navigation />
    </Router>
);
