//MAP

let arr = [18 , 47, 73]

let a = arr.map((value)=>{
    console.log(value)
    return value + 1
})
console.log(a)
//prints..
//19
//48
//74

//the diff btw map and foreach is the map creates an new array by performing same operation on each element jab ki foreach usima changes karta hai



//additional arguments can also be given
let arr2 = [18 , 47, 73]

let b = arr2.map((value, index, array)=>{
    console.log(value)
    return value + index
})
console.log(a)

//ans ka side ma uska index uska side ma wo array print hoga