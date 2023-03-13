import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledOnOffOnOff} from './components/UncontrolledOnOff/UncontrolledOnOffOnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';

export function App() {

    let [isActive, setIsActive] = useState<boolean>(false)

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
            <OnOff isActive={isActive} isActiveHandler={setIsActive}/>
            <UncontrolledOnOffOnOff/>
            <UncontrolledAccordion title={'Uncontrolled'}/>
            <UncontrolledRating/>
        </div>
    );
}



