import React, { useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (value:string) => { // need to fix any
        setName(value) // need to fix
    }
    const onKeyPressHandler = () => {
            addUser()
    }
    const addUser = () => {
        if (name === "") {
            setError('Write correct name')
        } else {
            setError('')
            addUserCallback(name)
            alert(`Hello  ${name}!`) // need to fix
            setName("")
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            users={users}
            setNameCallback={setNameCallback}
            keyPressHandler={onKeyPressHandler}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer