import React from 'react';

import './NavBar.css';

export default function NavBar() {
    return (
        <>
            <nav className="p-4 bg-gray-800 text-white navbar">
                <span className="text-lg font-bold lt">&lt; LT &gt;</span>
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><a href="#" className="hover:underline">About</a></li>
                    <li><a href="#" className="hover:underline">Services</a></li>
                    <li><a href="#" className="hover:underline">Contact</a></li>
                </ul>
            </nav>
        </>
    );
}