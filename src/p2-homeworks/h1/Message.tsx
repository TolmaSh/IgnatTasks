import React from 'react'
import s from "./Message.module.css"

type propsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: propsType) {
    return (
        <div className={s.message}>
            <img className={s.avatar} src={props.avatar} alt=""/>
            <div className={s.content}>
                <h2 className={s.name}>{props.name}</h2>
                <span className={s.messageItem}>{props.message}</span>
                <time className={s.time}>{props.time}</time>
            </div>
        </div>
    )
}

export default Message
