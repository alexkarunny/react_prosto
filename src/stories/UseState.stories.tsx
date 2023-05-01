import React, {useCallback, useEffect, useMemo, useState} from 'react';

export default {
    title: 'deep deep useState',
}

function generateData() {
    console.log('generate')
    return 56654
}

export const NewUseState = () => {

    let [counter, setCounter] = useState<number>(generateData) // запихнуть в инит значение функцию, и она вызовется только один раз для расчета инит значения; ф изменения стейта можно запихнуть ф

    const changer = (state: number) => {
        return state + 1
    }

useEffect (() => {
    console.log('useEffect every render')
    document.title = counter.toString()
})
useEffect (() => {
    console.log('useEffect only first render === componentDidMount')
    document.title = counter.toString()
}, [])
useEffect (() => {
    console.log('useEffect first render and every time then counter changing == componentDidUpdate')
    document.title = counter.toString()
}, [counter])

    return (
        <div>
            <button onClick={() => setCounter(changer)}>++</button>
            {counter}
        </div>
    )
}

export const SetTimeoutExample = () => {


    let [date, setDate] = useState<Date>() // запихнуть в инит значение функцию, и она вызовется только один раз для расчета инит значения; ф изменения стейта можно запихнуть ф
    useEffect(() => {
        setInterval(() => {
            const date = new Date()
            setDate(date)

        }, 1000)
    }, [])

    let hours = date?.getHours()
    let minutes = date?.getMinutes()
    let seconds = date?.getSeconds()
    return (
        <div>
            {`${hours}:${minutes}:${seconds}`}
        </div>
    )
}
