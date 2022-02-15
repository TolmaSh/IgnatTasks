import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import s from './HW10.module.css'

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)

    const dispatch = useDispatch()

    const setLoading = () => {
        // dispatch
        dispatch(loadingAC())
        setTimeout(() => dispatch(loadingAC()), 1000);
        // setTimeout
        console.log('loading...')
    };

    return (
        <div>
            <h3>Homeworks 10</h3>

            <div className={s.loaderWrapper}>
                {/*should work (должно работать)*/}
                {loading
                    ? (
                        <div className={s.loader}>
                            <div className={`${s.inner} ${s.one}`}></div>
                            <div className={`${s.inner} ${s.two}`}></div>
                            <div className={`${s.inner} ${s.three}`}></div>
                        </div>
                    ) : (
                        <div>
                            <SuperButton className={s.loadingBtn} onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }

                {/*<hr/>*/}
                {/*для личного творчества, могу проверить*/}
                {/*<Alternative/>*/}
                {/*<hr/>*/}
            </div>
        </div>
    )
}

export default HW10
