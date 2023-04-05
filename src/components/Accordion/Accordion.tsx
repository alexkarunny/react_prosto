import React from "react";

type accordionProps = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
    cities: string[]
}

export function Accordion(props: accordionProps) {

    return (
        <div>
            <AccordionTitle title={props.title} setCollapsed={() => props.setCollapsed(!props.collapsed)}/>
            {!props.collapsed && <AccordionBody cities={props.cities}/>}
        </div>
    )
}

type accordionTitleProps = {
    title: string
    setCollapsed: () => void
}

function AccordionTitle(props: accordionTitleProps) {
    return <h2 onClick={props.setCollapsed}>{props.title}</h2>
}

type AccordionBodyPropsType = {
    cities: string[]
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.cities.map(c => <li key={c.length}>{c}</li>)}
        </ul>
    )
}