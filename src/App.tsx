import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from './components/OnOff/OnOff';

export function App() {
    console.log("app rendering")
    return (
        <div>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Accordion title={'numbers'} collapsed={true}/>
            <Accordion title={'letters'} collapsed={false}/>
            <OnOff isActive={true}/>
        </div>
    );
}



