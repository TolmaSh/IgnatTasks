import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from './HW6.module.css'

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        const state: string = restoreState<string>('editable-span-value', '')
        setValue(state)
    }

    return (
        <div className={s.wrapper}>
            {/*<hr/>*/}
             <h3>homeworks 6</h3>

            {/*should work (должно работать)*/}
            <div className={s.span_wrapper}>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />

            </div>
            <div className={s.buttons_wrapper}>
                <SuperButton onClick={save}>save</SuperButton>
                <SuperButton onClick={restore}>restore</SuperButton>
            </div>


            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            {/*<hr/>*/}
        </div>
    )
}

export default HW6
