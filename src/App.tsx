import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledOnOffOnOff} from './components/UncontrolledOnOff/UncontrolledOnOffOnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';

export function App() {

    const [isActive, setIsActive] = useState<boolean>(false)
    const [value, setValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(3)
    const [collapsed, setCollapsed] = useState<boolean>(false)


    return (
        <div>
            <h1>Controlled Elements</h1>
            <Rating value={value} setValue={setValue}/>
            <Accordion title={'letters menu'} collapsed={collapsed} setCollapsed={setCollapsed}/>
            <OnOff isActive={isActive} isActiveHandler={setIsActive}/>
            <h1>Uncontrolled elements</h1>
            <UncontrolledRating/>
            <UncontrolledAccordion title={'title menu'}/>
            <UncontrolledOnOffOnOff/>
        </div>
    );
}



