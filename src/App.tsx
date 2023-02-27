import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <Rating/>
            <Accordion />
        </div>
    );
}

function Rating() {
    return (
        <div>
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    )
}

function Accordion() {
    return (
        <div>
            <div>Menu</div>
            <ul>
                <li>City</li>
                <li>Name</li>
                <li>LastName</li>
            </ul>
        </div>
    )
}

function Star() {
    return <span>star </span>
}

export default App;
