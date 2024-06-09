let arr = [45,87,46]
let a = arr.map((value)=>{
    console.log(value)
    return value+1
})
console.log(a)

//then the difference between foreach and map is , the map use to create an new array by performing some operations on each array element..
//then the new array created is[46,88,47]




//isma hum aur bhi arguments add kar sakta hai
let arr2 = [45,87,46]
let b = arr2.map((value, index, array)=>{
    console.log(value, index, array)
    return value + index
})
console.log(b)





//end ma array return karta hai