import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <ul key={p._id} className={s.userList}>
            <li className={s.userInfo}>
                <span>{p.name}</span>
                <span className={p.age < 18 ? `${s.young}` : `${s.old}`}>{p.age}</span>
            </li>
        </ul>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const CheckAge = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}))

    return (
        <div className={s.hw8}>
            {/*<hr/>*/}
            <h3> homeworks 8</h3>
            {/*should work (должно работать)*/}
            {finalPeople}
            <div className={s.buttons}>
                <SuperButton onClick={sortUp} className={s.sortUp}>Sort up</SuperButton>
                <SuperButton onClick={sortDown} className={s.sortDown}>Sort down</SuperButton>
                <SuperButton onClick={CheckAge} className={s.checkAge}>18+</SuperButton>
            </div>


            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            {/*<hr/>*/}
        </div>
    )
}

export default HW8
