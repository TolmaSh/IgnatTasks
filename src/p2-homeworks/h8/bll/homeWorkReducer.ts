import {initialStateType} from "./tests/homeWorkReducer.test";
import {log} from "util";


export const homeWorkReducer = (state: initialStateType[], action: generalType): any => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if ( action.payload === 'up') {
                state.sort((a, b) => a.name.localeCompare(b.name))
            }
            if ( action.payload === 'down') {
                state.sort((a, b) => b.name.localeCompare(a.name))
            }
            return state
        }
        case 'check': {
            // need to fix
            return state
        }
        default: return state
    }
}

type generalType = SortUpACType | CheckACType | SortDownACType

export type SortUpACType = ReturnType<typeof SortUpAC>
export const SortUpAC = () => {
  return {
      type: 'sort',
      payload: 'up'
  } as const
}
export type SortDownACType = ReturnType<typeof SortDownAC>
export const SortDownAC = () => {
    return {
        type: 'sort',
        payload: 'down'
    } as const
}


export type CheckACType = ReturnType<typeof CheckAC>
export const CheckAC = () => {
    return {
        type: 'check',
        payload: 18
    } as const
}