import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

export function App() {
    console.log("app rendering")
    return (
        <div>
            <Rating value={5}/>
            <Accordion title={'numbers'}/>
        </div>
    );
}



