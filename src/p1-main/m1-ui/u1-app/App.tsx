import React from 'react'
import s from './App.module.css'
import HW1 from '../../../p2-homeworks/h1/HW1'
import HW2 from '../../../p2-homeworks/h2/HW2'
import HW3 from "../../../p2-homeworks/h3/HW3";

function App() {
    return (
        <div className={s.App}>
            <div className={s.header}><h1>React Homeworks:</h1></div>
            <hr/>
            <HW1/>
            <hr/>
            <HW2/>
            <hr/>
            <HW3/>
            <hr/>
            {/*<HW4/>*/}
            {/*<HW5/>*/}

        </div>
    )
}

export default App
