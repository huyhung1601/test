import React, {useRef, useState, useContext} from 'react'
import { GlobalContext } from './context/Context'
export default function Test() {
    const {name,updateName} = useContext(GlobalContext)
    const inputRef = useRef()
    const [state, setState] = useState('')
    return (
        <div>
            <h1>{name}</h1>
            <input ref={inputRef} type='text' placeholder='change name'/>
            <input value={state} type='text' placeholder='change name' onChange={(e)=>setState(e.target.value)}/>
            <button onClick={()=>updateName(state)}>update</button>
        </div>
    )
}
