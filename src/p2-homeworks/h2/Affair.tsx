import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix
    return (
        <div>
            <ul>
                <li>{props.affair.name}</li>
                <li>[{props.affair.priority}]</li>
                <li>
                    <button onClick={deleteCallback}>X</button>
                </li>
            </ul>


        </div>
    )
}

export default Affair
