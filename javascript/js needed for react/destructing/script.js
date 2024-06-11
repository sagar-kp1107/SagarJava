let arr = [3, 5, 8]
let[a, b, c, d] = arr

//no need to do this to assign a=3,b=5,c=8
//let a = arr[0]
//let b = arr[1]

console.log(a, b, c, d)
//to phir isma d ka case ma uski value initialize nahi ho payagi



//bacha hua koo print karna ka liya
let arr1 = [3, 5, 8, 2, 9, 6]
let[e, f, g,...rest] = arr1



console.log(e, f, g, rest)
//iss case ma jo bacha hua elements haa 2, 9, 6 wo akk array ma aa jayanga




//agar hum chata hai ki h ki value 3 ho jay aur baki ki value 2 sa suru ho to iska matlab huma f aur g ko kich bhi assign nahi karna hai
let arr2 = [3, 5, 8, 2, 9, 6]
let[h, , ,...rest] = arr2

console.log(h, rest)
//ans : 3,2,9,6


//....destructing assigment is usedd to unpack values from an array or properties from objects into distinct variables



//destructing the objects on the left side of the assignment(mostly used)
let {i, j} = {i: 1, j: 5}
console.log(i, j)//a ma aa jayaga 1 aur b ma aa jayaga 5





//SPREAD OPERATOR
//converts an array to an object as an key value pair
let arr3 = {3, 5, 8}
let obj1 = {...arr3}
console.log(obj1)
//ans will be{0:3, 1:5, 2:8} where 0,1,2 are key ans bakii are values


      //array ka andar wala values ko agar hum akk funcn ma pass karna chata hoo
      let arr4 = {3, 5, 8}
      let obj2 = {...arr4}
      console.log(obj2)

      function sum(v1, v2, v3) {
        return v1 + v2 + v3
      }

      console.log(sum(...arr4))

//used in react mostly
let obj3 = {
  name: "sagar",
  company: "company xyz",
  address: "XYZ"

}
console.log({...obj1, name: "tillu"})//khali name isma change hoka tillu ho jayaga aur baki sab wassa ka wassa rahaga(matlab ya akk tarah sa overwrite kar daga)
