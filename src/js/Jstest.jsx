import React from "react";
const array1 = [1, 2, 3];
const array2 = [3, 2, 3];
const array3 = [3, 4, 5];
console.log([...new Set(array1.concat(array2, array3))]);

// function flatten (array) {
//     return array.reduce((flat,toFlatten)=>{
//         return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten)
//     },[])
// }

//Shuffle array
function shuffle(array) {
    let currentIndex = array.length
    let temporaryValue, randomIndex

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -=1

        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
    }
    return array
}
console.log(shuffle([1,2,3,4,5,6,7,8]))
//Flatten array
const flatten = array =>{
    return array.reduce((flat,toFlatten)=>{
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten)
    },[])
}
console.log(flatten([[1,2],[3,4,[5,6]]]));
//Add numbers
const add = (a) => (b) => b ? add(a + b) : a;
const total = add(2)(3)();
const Jstest = () => {
  return (
    <div>
      <h1>{total}</h1>
    </div>
  );
};

export default Jstest;
