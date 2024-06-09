//REDUCE

let arr3 = [1,2,3,5,2,1]

let a3 = arr3.reduce((s1, s2)=>{
    
    return s1 + s2
})
console.log(a3)

//isma humara print hoga 14 logic below:
//1+2 = 3
//3+3 = 6
//6+5 = 11.......14

//pahla ya 1 aur 2 laga uss return walla funcn sa pass karayaga phir soooooo  onnnnnnn




//reduce ki jagha hum proper funcn bhi bana sakta hai
let arr4 = [1,2,3,5,2,1]
const reduce_func = (s1 , s2) => {
    return s1 + s2
}

let a4 = arr4.reduce(reduce_func)
console.log(a4)


//reduce returns value but the map and filter returns array