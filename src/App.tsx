import React from 'react';
import './App.css';

export function App() {
    console.log("app rendering")
    return (
        <div>
            <Rating/>
            <Accordion/>
        </div>
    );
}

function Rating() {
    console.log("rating rendering");
    return (
        <div>
            <Star/>
        </div>
    )
}

function Accordion() {
    console.log("accordion rendering")
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

function Star() {
    console.log("star rendering");
    return <span>star </span>
}

function AccordionTitle() {
    return <h2>Menu</h2>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

