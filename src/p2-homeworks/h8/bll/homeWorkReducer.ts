
import {UserType} from "../HW8";


export const homeWorkReducer = (state: UserType[], action: generalType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if ( action.payload === 'up') {
                const newState = [...state]
               return newState.sort((a, b) => a.name.localeCompare(b.name))
            }
            if ( action.payload === 'down') {
                const newState = [...state]
                return newState.sort((a, b) => b.name.localeCompare(a.name))
            }
            return state
        }
        case 'check': {
            const newState = [...state]
            return newState.filter( s => s.age >= 18)
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