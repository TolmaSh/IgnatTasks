import React from 'react'
import Clock from './Clock'
import s from './HW9.module.css'

function HW9() {
    return (
        <div>
            <h3>Homeworks 9</h3>
            <div className={s.HW9}>
                {/*should work (должно работать)*/}
                <Clock/>

                {/*<hr/>*/}
                {/*для личного творчества, могу проверить*/}
                {/*<AlternativeClock/>*/}
                {/*<hr/>*/}
            </div>
        </div>

    )
}

export default HW9
