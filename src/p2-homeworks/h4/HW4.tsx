import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.css'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'
import AlternativeSuperInputText from "./common/c1-SuperInputText/AlternativeSuperInputText";


function HW4() {
    const [text, setText] = useState<string>('')


    const error = text ? '' : 'Error'


    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text) // если нет ошибки показать текст
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (
        <div>
            <hr/>
            <h3>Homeworks 4</h3>

            <div className={s.column}>
                <div className={s.btnGroup}>
                    <h2>SuperInput</h2>

                    <SuperInputText
                        value={text}
                        onChangeText={setText}
                        onEnter={showAlert}
                        error={error}
                        title={"Example Input"}
                        addBtn={true}
                        required={true}
                        // spanClassName={s.testSpanError}
                    />

                    <SuperInputText
                        className={s.styledInput} // проверьте, рабоет ли смешивание классов
                        title={'Hello'}
                        myHelpText={'Example Help Text'}
                    />
                </div>

                {/*----------------------------------------------------*/}
                <div className={s.btnGroup}>
                    <h2>SuperButtons</h2>
                    <SuperButton>
                        default
                    </SuperButton>

                    <SuperButton
                        remove // пропсу с булевым значением не обязательно указывать true
                        onClick={showAlert}
                        className={s.deleteBtn}
                    >{/*// название кнопки попадёт в children*/}
                    </SuperButton>

                    <SuperButton disabled>
                        disabled
                    </SuperButton>
                </div>


                {/*----------------------------------------------------*/}

                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    some text {/*// этот текст попадёт в children*/}
                </SuperCheckbox>

                {/*// onChange тоже должен работать*/}
                <SuperCheckbox checked={checked} onChange={testOnChange}/>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperInputText/>*/}
            {/*<AlternativeSuperButton/>*/}
            {/*<AlternativeSuperCheckbox/>*/}
            <hr/>
        </div>
    )
}

export default HW4
