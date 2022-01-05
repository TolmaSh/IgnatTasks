import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "./RoutesPage";


function Header() {
    return (
        <div className={s.header}>


            <input type="checkbox" id="hmt" className={s.hidden_menu_ticker}/>

            <label className={s.btn_menu} htmlFor="hmt">
                <span className={s.first}></span>
                <span className={s.second}></span>
                <span className={s.third}></span>
            </label>

            <ul className={s.hidden_menu}>
                {/*<li><NavLink to={'/'} className={s.link}>Main</NavLink></li>*/}
                <li><NavLink to={PATH.PRE_JUNIOR} className={({isActive}) => isActive ? `${s.link} ${s.link_active}` : `${s.link}`}>Pre Junior</NavLink></li>
                <li><NavLink to={PATH.JUNIOR}  className={({isActive}) => isActive ? `${s.link} ${s.link_active}` : `${s.link}`}>Junior</NavLink></li>
                <li><NavLink to={PATH.STRONG_JUNIOR}  className={({isActive}) => isActive ? `${s.link} ${s.link_active}` : `${s.link}`}>Junior+</NavLink></li>


            </ul>
        </div>
    )
}

export default Header
