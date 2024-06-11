//syncronous matlab akkk ka bad dusra ddusra ka bad tisra aisaaa jaab tak akk command complete naa ho dusra nahi chalaga
//Asyncronous matlab tinoo kam ko akk sath start kardo joo bhi pahla ho jaya bata dena(eg: race)

//PATA KAISA CHALAGA KI HUM SYNC CODE LIKH RAHA HA YA ASYNC:-

//ASYNC :
// setTimeout
// setInterval
// Promises
// fetch
// axios
// XMLHttpRequest

//SYNC:
// rest all lies in it (simple eg:- 
console.log("tillu")
console.log("kya")
console.log("kar raha")
console.log("hai")
//sync ha isiliya sab line sa chalaga


//Async js :- kai baar aapka final code dependend hota hai kisi aur ka server pa, is case mein humein nahi pata hota ki answer uske server se kab laut kar aayega, to hum kya nahi kar sakta is writing sync code, isse nipatne ke liya hum log async code likh dete hai taaki blocking naa ho and jab bhi answer aaye humara answer ke respect mein chalne waala code chal jaaye[code jo kuch dar bad chalaga aur jab bhi wo chalaga hum funcn ko chala danga]



//async code ka main motive hota hai ki unn cases mein jinmein hume pata nahi code ka answer kitni der mein aayaga to jab bhi answer aa jaaye uske answer ke respect mein koi perticular code chala dena
//EX :- facebook nsa photo laao aur jab photo aajaye show kar  dena

//----------------------1
//          ----------2
//pahla line 1 complete hogi phir uska andar likha line 2 chalaga




//callback jaha bhi likha hota ha uski jagha function ata hai

________________________________1

setTimeout(function(){},2000)//pahla line 1 chalaga phir line 2 two sec ka liya wait nahi karaga wo line 1v chalna ka bad hi chal jayaga
________________________________2

//agar huma line 2 ko wait karana hai 2 sec ka bad chalna ka liya to phir usaa huma funcn ka andar likhna padaga:)


console.log("hay")
setTimeout(function(){//ya andar walla funcn ko hum callback funcn kahanga kyunki jab hum 3 sec bad call karanga tab ya chalaga
    console.log("sagar")
},3000)
console.log("where r u")//pahla "hay" ayaga phir "where r u" ayaga phir "sagar"(3sec ka bad ayaga)



//callback funcns humasa async code main answer anna pa chalta hai(eg :- jaisa fb mai humna kisuiko request bhaj di tab wo uska respond anna tak ka wait karka chalaga aur phir conform dikhaiga)


//js is not asyncronous?
//async ka matlab hota hai do kam akk sath doo kam akk sath katna par js do kam akk sath kar hi nahi sakti kyunki wo multithereding haa hi nahi ,single thread hai
//jo bhi main stack par hota hai wo output karta hai and jo bhi side stack par hota hai wo behind the scenes processing kar sakta hai aur jab uski processing complete ho use main stack maa laa kar chalaya jaa sakta hai[//sync code humasa main stack ma jayaga aur async side stack]
//(main stack: execution)

//agar char kaam ahai  a,b,c,d unma sa a aur b sync hai aur c aur d async hain  , a aur b main stack ma jayanga aur c aud d jayanga side stack main pahla a comp hoga phir b phir jaka c sa pucha jayagja ki kya tum comp hua agar usna kaha aur thodsa time lagaga to phir d sa pucha jayaga aur agar d na kaha ha main comp hogaya to usa main stack main laa jayanga phir dubara c ka pas ayanga puchna ka liya.. agar c ka kam comp ho gaya hoga tab c ko l;aya jayaga main stack ma .....phir c ko chalaya jayaga aur phir kam khatam(all is done by event loop side stack ma kuchn comp hua hoo to main stack maa laa jana)


//js single thread hai akk compution karna ki taquat akk thread hota haimatlab akk sath a aur b nahi chalta to js kya karta hai balance karta hai (aur ya bbalance bht taj hota hai) to thoda a phir thoda b...........asa chalta rahata hai





//CALLBACKS
//inma sa agar hum kuch bhi likkh raha ha matlab hum async ka code likh raha hai(ya req ko bhajta hai)
// fetch(url)
// axios(//used for api call)//matlab third party sa hum data lana jayanga (to kitna time lagaga huma pata nahi hota isliya async)
// Promises
// setTimeout
// setInterval

//Jab complete ho jaya to uska ans milta hai:-
// then catch
// callbacks
// async await

//callback :- humasa akk number hota hai jo sirf tab chalta hai jab async code ka completion ho jata hai(EX:- setTimeout ka andar walla funcn [jo jitna time likhha ha uska bad chalaga to wo akk callback funcn hua])
//EX:-
var ans = fetch(`https://www.facebook.com`)//ya akk req jayaga ,ya kitni dar bad chalaga,kab chalaga ,chalaga bhi ya nahi humma nahi patta (agar humna ya nahi chala,ya chalna sa pahla hi issa print kar diya to dikkat ho jayagi)
.then//for above reason we use this
console.log(ans);





//async code likhna ka liya(we use):-
fetch
XMLHttpRequest
axios
Promises
setInterval
setTimeout
//ya kab comp hoga humma nahi pata, par ya jab bhi comp hoga to ans chal jaya 
//Aur inka ans chalana ka liya hota hai callbacks:
//then catch
// callbacks
// async await








//PROMISES:-
//code jo hum likhanaga wpo feture ma kabhi chalaga(so it have two responces)
//1)code chaljayaga(resolve hoga)
//2)nahi chalaga(reject hoga)
//jasa ki ya feture ma chalaga hum issa save kar danga akk variable main
//agar ya resolve state ma hoga to chalaga [then]
//agar ya reject state ma hoga to chalaga [catch]

//EX:- jaisa ki mana promise kiya ki kal ma app sab ka liya laddu launga
//          ya pending state ma hai ,main laddu launga ya nahi ya to kal hi pata chalaga na(to phir hum issa save kar langa akk variable main)
//var ka andar iss case mai jo bhi haa wo tin hi state main ho sakta hai
//1)pending
//2)resolve(hojaya to variable ko kahna(then))
//3)reject(hojaya to var ko kahna (catch))

//EX1:-
var ans = new Promise((res, rej) => {
    if(true) {
        return res();
    }
    else {
        return rej();
    }
})

ans
.then(function() {
    console.log("resolve hogaya tha!")
})
.catch(function() {
    console.log("reject hua tha!")
})


//EX2:-
//user will ask for a number btw 0 to 9 and if the number is below 5 then resolve if not then reject:

var ans = new Promise((res, rej) => {
    
    var n = Math.floor(Math.random()*10);


    if(n<5) {
        return res();
    }
    else {
        return rej();
    }
})

ans
.then(function() {
    console.log("below")
})
.catch(function() {
    console.log("above")
})
//agar number 5 sa chota hoga to res chalaga, res chalaga to phir than chalaga, likha ayaga below


//EX3(an async task[akkk kam ka bad dusra hoga])
//sabsa pahla ghar pa aao
//gate kholo aur gate lagao
//khana pakao aur khana khao
//incognato mode chalao
//soo jao kyu ki tum thak gaya ho

var ans = new Promise((res, rej) => {
    return res("sabsa pahla ghar par aao")
})

var p2 = ans.then(function (data) {//ans ki jab then state ayagi matlab resolve ho gaya means ghar chala gaya 
    console.log(data);//print hoga "sabsa pahla ghar par aao"
    new Promise(function(res, rej){
        return res("gate kholo aur gate lagao");
    })
})
//jo bhi return hoga p2 ma chala jayaga

var p3 = p2.then(function (data) {
    console.log(data);//print hoga "sabsa pahla ghar par aao"
    new Promise(function(res, rej){
        return res("khana pakao khana khao");
    })
})

var p4 = p3.then(function (data) {
    console.log(data);//print hoga "sabsa pahla ghar par aao"
    new Promise(function(res, rej){
        return res("soo jao kyunki thak gaya hoo");
    })
})





//ASYNC AWAIT:-

//koi bhi aisa function jisma app async code likhanga, kyunki async code ha to app promise ka itsmaal kar sakta hai, jab uska answer ayaga tab apko then lagana padaga, uss then ko lagana sa bachna ka liya ,app async await ka itsmaal kar sakta hai...

//nearest funcn ka aga async laga doo
async function abcd() {
    let raw = await fetch(`https://randomuser.me/api/`);//awat matlab wait karo iss line ka jab tak ans naa aa jay phir raw ma dal do (go to side stack)
    let ans = await raw.json();//raw ka chalna sa pahla to hum usa json ma convert nahi kar sakta ha na isliya hum idhar bhi await laga data hai
    console.log(ans);//ya line akk sync code ha par isma humne jo ans likha ha jo ki dependent haa akk async code pa, to ya line tab tak nahi chali jab tak huma ans nahi mil jata
}
//dakho jab bhi koi code async hai to apko uska liya wait karna padta hai kyunki humma nahi patta uska answer kab ayaga (jassa ki iss case mai wo url async ha huma nahi pata usma sa data fetch hoka kab ayaga)

abcd();



//agar hum async await ka use nahi karta to wo sati se data fetch hoka humma pahla raw format ma milta phir usaaa convert karna padta phir real data ko dubara then lagaka lanna padta hai
function efgh() {
    fetch(`https://randomuser.me/api`)
    .then(function(raw) {
        return raw.json();
    })
    .then(function(data) {
        console.log(data)
    });

}

efgh();

//5 Uses of async await in real world:-
//node main jab data-base ma kam karta ho tab
//fetch(bacand sa data ko call karna ka liya)
//setTimeout
//setInterval

//jab bhi hum kissi third party sa data lata hai tab humara appliucation ko wait karna padta ha uss data ka anna tak kaa uska bad hi agli line chgalni chaiya, agar wo dependent hai apna data paa


//CONCURRENCY: js main sync code and async code akk sath process ho raha tha yahi haa concurrency(jasa main stack ma code chal raha hai aur side stack maa bhi code chal hi raha hai khali complete hona par wo batayaga main stack ko)

//PARALLELISM: focus jyada karta hai different processeors and unka cores par kaam ko chalana par

//THROTTLING: kissi code ko control karna number of execution se(matlab jab hum akk bada area ma scrolling kar raha haa tab jab hum normally karta ha to akk man lo 1inch area scroll karna ha tab 500 bar man lo scroll hoga , to phir hum throttling bka maddad sa per 20mili sec ko akk m,an sakta haa)