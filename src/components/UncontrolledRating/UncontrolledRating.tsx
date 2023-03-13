import React, {useState} from 'react';

export function UncontrolledRating() {
    let [value, setValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)
    return (
        <div>
            <Star selected={value > 0} value={1} setValue={setValue}/>
            <Star selected={value > 1} value={2} setValue={setValue}/>
            <Star selected={value > 2} value={3} setValue={setValue}/>
            <Star selected={value > 3} value={4} setValue={setValue}/>
            <Star selected={value > 4} value={5} setValue={setValue}/>
        </div>
    )
}

type starProps = {
    selected: boolean
    value: 0 | 1 | 2 | 3 | 4 | 5
    setValue: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
}

function Star(props: starProps) {
    const onClickHandler = () => {
        props.setValue(props.value)
    }
    return props.selected ? <b><span onClick={onClickHandler}>star </span></b> :
        <span onClick={onClickHandler}>star </span>
}