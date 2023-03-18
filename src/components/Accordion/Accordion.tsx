import React from "react";

type accordionProps = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

export function Accordion(props: accordionProps) {

    return (
        <div>
            <AccordionTitle title={props.title} setCollapsed={() => props.setCollapsed(!props.collapsed)}/>
            {!props.collapsed && <AccordionBody/>}
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

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}