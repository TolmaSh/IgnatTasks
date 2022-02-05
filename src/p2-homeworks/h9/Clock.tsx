import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW9.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        // stop
        clearInterval(timerId);
        setDate(undefined)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            // setDate
            setDate(new Date())

        }, 1000)
        setTimerId(id)
    }
    const onMouseEnter = () => {
        // show
        setShow(true)
    }
    const onMouseLeave = () => {
        // close
        setShow(false)
    }

    const stringTime = date ? date.toLocaleTimeString() : `Click start button`;// fix with date
    const stringDate = date ? date.toLocaleDateString() : `Don't hover only click` // fix with date

    return (
        <div className={s.Clock}>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className={s.item}
            >
                <h4>Time:</h4>
                {stringTime}
            </div>

            {show && (
                <div className={s.item}>
                    <h4>Date:</h4>
                    {stringDate}
                </div>
            )}
            <div className={s.btns}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop} className={s.stop}>stop</SuperButton>
            </div>

        </div>
    )
}

export default Clock
