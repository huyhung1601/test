import React, { useReducer,createContext } from 'react'
import AppReducer from './AppReducer'
const initialState = {
    comments: []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);
    

    return(<GlobalContext.Provider value={{
        comments: state.comments,          
    }}>   
        {children}
    </GlobalContext.Provider>  
    );
}