import React from "react";

type accordionProps = {
    title: string
}

export function Accordion(props: accordionProps) {
    console.log("accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    )
}

type accordionTitleProps = {
    title: string
}

function AccordionTitle(props: accordionTitleProps) {
    return <h2>{props.title}</h2>
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