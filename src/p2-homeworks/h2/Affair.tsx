import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affairs.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    const priorityType =
        (props.affair.priority === "low") ? `${s.low}` : (props.affair.priority === "middle") ?  `${s.middle}` : `${s.high}`
    return (
        <div>
            <ul>
                <li className={s.taskName}>{props.affair.name}</li>
                <li className={priorityType}>[{props.affair.priority}]</li>
                <li>
                    <button onClick={deleteCallback}>X</button>
                </li>
            </ul>


        </div>
    )
}

export default Affair
