import React,{memo,useContext} from 'react'
import { TestContext } from '../context/test/TestContext'
const Child = (props) => {
    const {value, add} = useContext(TestContext)

    function changeNumber() {
        props.changeNumber(Math.random())
    }
    console.log("Child")

    return (
        <div>
            
            <h1>{value}</h1>
            <button onClick={add}>Add</button>
            <h1>Child: {props.number}</h1>
            <button onClick={changeNumber}>Click to change child number</button>
        </div>
    )
}

export default memo(Child)
