import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://image.freepik.com/free-photo/waist-up-portrait-of-handsome-serious-unshaven-male-keeps-hands-together-dressed-in-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

function HW1() {
    return (
        <div>

            <h3>Homeworks 1</h3>

            {/*should work (должно работать)*/}
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />


            {/*для личного творчества, могу проверить*/}
        </div>
    )
}

export default HW1
