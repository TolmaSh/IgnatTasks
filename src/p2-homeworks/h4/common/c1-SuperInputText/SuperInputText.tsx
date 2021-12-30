import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react'
import s from './SuperInputText.module.css'
import AddBtn from "./AddBtn/AddBtn";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperInputTextPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
    title?: string
    addBtn?: boolean
    onClickButton?: () => void
    myHelpText?: string
}

const SuperInputText: React.FC<SuperInputTextPropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeText,
        onKeyPress, onEnter,
        onClick,onClickButton,
        error,
        className, spanClassName,
        addBtn,myHelpText,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange // если есть пропс onChange
        && onChange(e) // то передать ему е (поскольку onChange не обязателен)

        onChangeText && onChangeText(e.currentTarget.value)
        error = e.currentTarget.value
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);

        onEnter // если есть пропс onEnter
        && e.key === 'Enter' // и если нажата кнопка Enter
        && onEnter() // то вызвать его

    }

    const onClickCallback = () => {
        onClickButton // если есть пропс onEnter
        && onClickButton() // то вызвать его
    }

    const finalSpanClassName = `${s.input_helper} ${spanClassName ? spanClassName : ''}`
    const finalInputClassName = `${error ? `${s.input_error} ${s.input_underlined}` : `${s.input_underlined}`} ${className}` // need to fix with (?:) and s.superInput
    const defaultInputText = `${restProps.title || ''}`
    const errorText = error ? `${error}` : `${myHelpText ? myHelpText : '' }`

    return (
        <div className={s.input_wrapper}>
            <label className={finalInputClassName}>
                <input
                    type={'text'}
                    onChange={onChangeCallback}
                    onKeyPress={onKeyPressCallback}
                    className={finalInputClassName}

                    {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
                />
                <span className={s.input_label}>{defaultInputText}</span>
                <span className={finalSpanClassName}>{errorText}</span>
                {addBtn && <AddBtn onClickAdd={onClickCallback}/>}
            </label>
        </div>

    )
}

export default SuperInputText
