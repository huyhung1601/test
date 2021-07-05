import React, { useReducer,createContext } from 'react'
import AppReducer from './AppReducer'
const initialState = {
    name: 'Henry123'
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
/**Action */
 
    //DELETE_PRODUCT 
    function updateName (name) {             
        dispatch({
            type: 'UPDATE_NAME',
            payload: name
        })
    }

 
    return(<GlobalContext.Provider value={{
        name: state.name,
        updateName,

    }}>   
        {children}
    </GlobalContext.Provider>  
    );
}