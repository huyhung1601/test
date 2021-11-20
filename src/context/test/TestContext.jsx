import React, {createContext,useReducer} from 'react'
import TestReducer from './TestReducer'

const initialState = {
    value: 0
}
export const TestContext = createContext()

export const TestProvider = ({children}) =>{
    const [state, dispatch] = useReducer(TestReducer, initialState)

    function add() {
        dispatch({
            type: 'ADD',
            
        })
    }
    return(
        <TestContext.Provider value={{
            value: state.value,
            add,
        }}>
            {children}
        </TestContext.Provider>
    )
}