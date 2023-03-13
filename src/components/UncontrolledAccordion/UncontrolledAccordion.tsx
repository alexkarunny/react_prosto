import React, {useState} from 'react';

type UncontrolledAccordionProps = {
    title: string
}

export function UncontrolledAccordion(props: UncontrolledAccordionProps) {
    let [collapsed, setCollapsed] = useState<boolean>(true)
    return (
        <div>
            <AccordionTitle title={props.title} collapsedHandler={setCollapsed} collapsed={collapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type accordionTitleProps = {
    title: string
    collapsedHandler: (collapses: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: accordionTitleProps) {
    return <h2 onClick={() => props.collapsedHandler(!props.collapsed)}>{props.title}</h2>
}

function AccordionBody() {
    return (
        <ul>
            <li>5</li>
            <li>5</li>
            <li>5</li>
        </ul>
    )
}