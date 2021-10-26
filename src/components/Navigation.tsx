import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="p-8 bg-indigo-900 text-gray-100">
            <ul className="flex justify-center">
                <li className="mx-8 hover:underline">
                    <Link to="/">Home</Link>
                </li>
                <li className="mx-8 hover:underline">
                    <Link to="/project">Project</Link>
                </li>
                <li className="mx-8 hover:underline">
                    <Link to="/roadmap">Roadmap</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
