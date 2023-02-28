import React from "react";

type ratingProps = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: ratingProps) {
    console.log("rating rendering");
    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>

        </div>
    )
}

type starProps = {
    selected: boolean
}

function Star(props: starProps) {

    return props.selected ? <b><span>star </span></b> : <span>star </span>
}