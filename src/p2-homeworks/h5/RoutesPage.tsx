import React from 'react'
import {Route, Routes,} from "react-router";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import { Junior } from './pages/Junior';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    STRONG_JUNIOR: '/strong-junior'
    // add paths
}

function RoutesPage() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                <Route path={'/*'} element={<Error404/>}/>
                <Route path={'/'} element={<PreJunior/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>


                {/*// add routes*/}

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                {/*<Route render={() => <Error404/>}/>*/}

            </Routes>
        </div>
    )
}

export default RoutesPage
