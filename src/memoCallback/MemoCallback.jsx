import React, { useState,useCallback, useMemo, useContext } from 'react'
import { TestContext } from '../context/test/TestContext'
import Child from './Child'

const MemoCallback = () => {

    const [localNumber, setLocalNumber] = useState(0)
    const [childNumber, setChildNumber] = useState(0)
    const [arr,setArr] = useState([1,2,3,4,5,6,7,8,9,10,11]);

    const memorizedCallback = useCallback(number => changeChildNumber(number),[])
    const memorizedValue = useMemo(()=> getLargestNumber(),[arr])

    function incrementLocal() {
        setLocalNumber(state => state +1)
    }

    const changeChildNumber = (number) =>{
        setChildNumber(number)
    }

    function getLargestNumber() {
        console.log("I am working");
        return Math.max(...arr)
    }

    const changeArray = () =>{
        setArr([12,43,99])
    }
    return (
        <div>
            <Child number={childNumber} changeNumber={memorizedCallback}/>
            <button onClick={incrementLocal}>Click to increment local</button>
            <h1>local: {localNumber}</h1>
            <h1>Largest Number: {memorizedValue}</h1>
            <button onClick={changeArray}>Change array</button>
        </div>
    )
}

export default MemoCallback
