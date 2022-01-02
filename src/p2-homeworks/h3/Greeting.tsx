import React from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (value: string) => void
    keyPressHandler: () => void// need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    users: Array<UserType>
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, keyPressHandler, addUser, error, totalUsers, users} // деструктуризация пропсов
) => {

    return (
        <div>
            <div className={s.input_wrapper}>
                <SuperInputText
                    title={'Name'}
                    value={name}
                    error={error}
                    required
                    addBtn
                    onClickButton={addUser}
                    onChangeText={setNameCallback}
                    onEnter={keyPressHandler}
                    myHelpText={`${totalUsers} users`}
                />
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
