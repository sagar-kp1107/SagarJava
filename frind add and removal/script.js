//matlab ya akk code ha jissa hum add friend button pa click karana sa wo jo red ma stranger likha hua haa joo wo friend ho jayya
var istatus = document.querySelector("h5")

var btn = document.querySelector("#add")
// var removeFriend = document.querySelector("#remove")
var check = 0



btn.addEventListener("click",function(){
    if(check == 0){
        
    istatus.innerHTML = "Friends"
    istatus.style.color = "green"
    btn.innerHTML = "Remove Friend"
    check = 1
    }else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        btn.innerHTML = "Add Friend"
        check = 0
    }

})




//abb remove valla button pa click karna sa dubara stranger ho jana chaiya
/*removeFriend.addEventListener("click",function(){
    istatus.innerHTML = "Stranger"
    istatus.style.color = "red"
})*/


//.........abb hum remove walla button ko sabmase hatta danga aur akk hi button sa dono kam karanga.......//