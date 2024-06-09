//WHAT IS DOM ?
//it is like frontand ki js iski madad sa hum kuch create karanga kuch features banayanga

//4 pillers of DOM:-

//1: selection of an element(koi html walla element ko hum js ma kaisa dhoka sa layanga ya koi element jo html ma likha ha aur mujha usa js ma select karna hai)
//2: chainging HTML(koi chiz html ma likha ha aur hum usko js sa hii kaisa change kar sakta hai)
//3: changing css(koi ,,   ,,     ,,  )
//4: event listener(humara website pa hum jo kuch bhji karanga drag drop move jo bhi jo bhi unha sunka perform karna ko hum event listener kahanga)


//1..
var a = document.querySelector("h1")
console.log(a)

//agar h1 banaya hoga to select hojayaga , ya phir to error bolaga

//for id 
 //document.querySelector("#box")

//for class 
 //document.querySelector(".box")




 //2..
 var a = document.querySelector("h1")
 a.innerHTML = "hi sagar" //yaha jo bhi likha wo h1 ki place par replace hojayaga




 //3..
 var a = document.querySelector("h1")
 a.style.color = "red"
 a.style.backgroundColor = "#000"
 //css file ka naam kuch bhi ho humma yaha style likhna mendatory haii







 //4..
 var a = document.querySelector("h1")

 a.addEventListener("click",function(){
    a.innerHTML = "badal gaya hu mai bhi tara ex ki taraha"
    a.style.color = "pink"
    a.style.backgroundColor = "green"
 })
 //iska matlab haa ki a jo h1 ko represent karata hai uspa click walla event listener lagado{a pa click karta hi function chalta hai aur funcn body ka andar jo bhi code likha hota hai wo execute ho jata hai}