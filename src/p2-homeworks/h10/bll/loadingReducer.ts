type InitStateType = {
    loading: boolean
}
const initState = {
    loading: false,
}

export const loadingReducer = (state = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case 'LOADING-TRUE': {
            return {...state, loading: !state.loading}
        }
        default:
            return state
    }
}

type ActionType = LoadingActionType

type LoadingActionType = ReturnType<typeof loadingAC>
export const loadingAC = () => {
    return {
        type: 'LOADING-TRUE',
    } as const
}