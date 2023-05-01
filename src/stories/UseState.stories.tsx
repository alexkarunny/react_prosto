import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'deep deep useState',
}

function generateData() {
    console.log('generate')
    return 56654
}

export const NewUseState = () => {
    console.log('state')


    let [counter, setCounter] = useState<number>(generateData) // запихнуть в инит значение функцию, и она вызовется только один раз для расчета инит значения; ф изменения стейта можно запихнуть ф

    const changer = (state: number) => {
        return state + 1
    }

    return (
        <div>
            <button onClick={() => setCounter(changer)}>++</button>
            {counter}
        </div>
    )
}
