import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledOnOffOnOff} from './components/UncontrolledOnOff/UncontrolledOnOffOnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {Select} from './components/Select/Select';

export type SelectItemsType = { id: number, title: string }[]

export function App() {
    const selectItems: SelectItemsType = [
        {id: 1, title: 'Pen'},
        {id: 2, title: 'Pencil'},
        {id: 3, title: 'Marker'},
    ]

    const [isActive, setIsActive] = useState<boolean>(false)

    const [value, setValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(3)

    const [collapsed, setCollapsed] = useState<boolean>(false)

    const [cities, setCities] = useState<string[]>(['Mensk', 'Kiev', 'Milano'])

    const [isSelectCollapsed, setIsSelectCollapsed] = useState<boolean>(false)

    const [titleSelect, setTitleSelect] = useState<string>('none')

    const collapseSelectHandler = () => {
        setIsSelectCollapsed(!isSelectCollapsed)
    }

    const titleSelectHandler = (id: number) => {
        setTitleSelect(selectItems[selectItems.findIndex(i => i.id === id)].title)
        setIsSelectCollapsed(true)
    }

    return (
        <div>
            <h1>Controlled Elements</h1>
            <Rating value={value} setValue={setValue}/>
            <Accordion title={'letters menu'} collapsed={collapsed} setCollapsed={setCollapsed} cities={cities}/>
            <OnOff isActive={isActive} isActiveHandler={setIsActive}/>
            <Select isSelectCollapsed={isSelectCollapsed} selectItems={selectItems} titleSelect={titleSelect}
                    collapseSelectHandler={collapseSelectHandler}
                    titleSelectHandler={titleSelectHandler}
            />
            <h1>Uncontrolled elements</h1>
            <UncontrolledRating/>
            <UncontrolledAccordion title={'title menu'}/>
            <UncontrolledOnOffOnOff/>
        </div>
    );
}

