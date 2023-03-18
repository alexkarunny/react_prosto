import React from "react";

type ratingProps = {
    value: 0 | 1 | 2 | 3 | 4 | 5
    setValue: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
}

export function Rating(props: ratingProps) {
    return (
        <div>
            <Star selected={props.value > 0} setValue={() => props.setValue(1)}/>
            <Star selected={props.value > 1} setValue={() => props.setValue(2)}/>
            <Star selected={props.value > 2} setValue={() => props.setValue(3)}/>
            <Star selected={props.value > 3} setValue={() => props.setValue(4)}/>
            <Star selected={props.value > 4} setValue={() => props.setValue(5)}/>
        </div>
    )
}

type starProps = {
    selected: boolean
    setValue: () => void
}

function Star(props: starProps) {
    return  <span onClick={props.setValue}>{props.selected ? <b>star </b> :`star `}</span>
}