import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    keyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void// need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    users: Array<UserType>
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, keyPressHandler, addUser, error, totalUsers, users} // деструктуризация пропсов
) => {
    const inputClass = (error !== "") ? `${s.input_error} ${s.input_underlined}` : `${s.input_underlined}` // need to fix with (?:)
    const errorText = (error !== "") ? `${error}` : `${totalUsers} users`

    return (
        <div>
            <div className={s.input_wrapper}>
                <label className={inputClass}>
                    <input value={name} onChange={setNameCallback} onKeyPress={keyPressHandler} required/>
                    <span className={s.input_label}>Name</span>
                    <span className={s.input_helper}>{errorText}</span>
                    <button onClick={addUser}>
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                             clip-rule="evenodd">
                            <path
                                d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm.5 10h6v1h-6v6h-1v-6h-6v-1h6v-6h1v6z"/>
                        </svg>
                    </button>

                </label>
                <ul>
                    {users.map(user => {
                        return <li>{user.name}</li>
                    })}
                </ul>
            </div>

        </div>
    )
}

export default Greeting
