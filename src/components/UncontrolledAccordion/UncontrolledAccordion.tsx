import React, {useReducer} from 'react';
import {ActionType, reducer} from './Reducer';

type UncontrolledAccordionProps = {
    title: string
}

export function UncontrolledAccordion(props: UncontrolledAccordionProps) {
    //let [collapsed, setCollapsed] = useState<boolean>(true)
    let [collapsed, dispatch] = useReducer(reducer, { toggle: false})


    return (
        <div>
            <AccordionTitle title={props.title} dispatch={dispatch} collapsed={collapsed.toggle}/>
            {!collapsed.toggle && <AccordionBody/>}
        </div>
    )
}

type accordionTitleProps = {
    title: string
    dispatch: (action: ActionType) => void
    collapsed: boolean
}

function AccordionTitle(props: accordionTitleProps) {
    return <h2 onClick={() => props.dispatch({type: 'TOGGLE-COLLAPSED'})}>{props.title}</h2>
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