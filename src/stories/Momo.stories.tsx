import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'React memo demo',
}


const SecretCounter = (props: { num: number }) => {
    console.log('Counter call')
    return <div>Number - {props.num}</div>
}

const SecretUsers = (props: { users: string[], addUser: () => void }) => {
    console.log('Secret Users call')
    console.log(props.users)
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
        <button onClick={props.addUser}>AddUser</button>
    </div>
}

const Users = React.memo(SecretUsers);
const Counter = React.memo(SecretCounter)


export const Memo = () => {
    let [value, setValue] = useState<number>(1)
    let [users, setUsers] = useState<string[]>(['Alex', 'Andrew', 'Baza', 'Eugene'])

    const addCounter = () => {
        setValue(++value)
    }
    const addUser = () => {
       setUsers([...users, `Sveta ${new Date().getTime()}`])
    }

    const memAddUser = useCallback(() => {
        setUsers([...users, `Sveta ${new Date().getTime()}`])
    }, [users])

    const newUsers = useMemo(() => {
        return users.map(u => u)
    }, [users])

/*    const newUsers = () => {
        return users.map(u => u)
    }*/

    return <>
        <button onClick={addCounter}>Add</button>

        <Counter num={value}/>
        <Users users={newUsers} addUser={memAddUser}/>
    </>
}