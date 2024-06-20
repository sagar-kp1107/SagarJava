//VAR CONST AND LET DIFF

//mainly 3 diff

//js has 2 versions es5(old)[var],es6(new)version[let,const]
//hum dono ko mix karka use karanga{es5+es6}matlab hum tino var,let,const use kar sakta ha

//var function scoped hota ha => var apna parent function ma kahi bhi use ho sakta ha
function abcd(){
    for(var i = 1; i<12; i++){
        console.log(i);
    }
    console.log(i);//ya bhi chalaga idhar isko na chalane ka liya hum let ka use karanga
}//isma for khatam means var bhi khatam(function scope)

abcd();


//let and const braces scoped hota ha

function abcd(){
    for(let i = 1; i<12; i++){
        console.log(i);
    }
    console.log(i);//now this line is not allowed to run bcz braces scope
}

abcd();

//var adds itself to the window object
var a = 12;//(added in window jo apka data ko sabka samne expose kar data ha)


//let and const doesnt adds itself to the window object 
let b = 12;//(yaa apna app ko window ma add karka sabka samne expose nahi karta khudko..)
//(EXPLAINED BELOW)

//js language ma kuch cheeje nahi hai jo hum use kar sakte hai aur wo cheeje hume js se nahi balki browserse milti hai,aise saare features jo js ka part nahi hai but fir bhi use kar sakte hai unhe hum dhoond sakte hai ek perticular object ma jiska naam hai window( example ka liya js ko akk pen samjho usa humne kaha kuch likhka batao ya draew karka batao ya page ma chad kardo.... agar hum pen ko bolta ha ki pen tum mara liya ak mob phn holder banado to pen kahata ha ya mara bas ki bat nahi hai .....to phir pen ak daba ka pas jayaga jiska pas bht sara features ha usma mob phn stand dhund ka laka ayaga to phn stand pen ka khud ka feature nahi hai to ya usa uss dabba sa laka aya jisaka nam ha window....to dabba ka jitna bhi chija wo js ka to part nahi hai wo sab browser ka part ha............EXAMPLE : alert , promt, console ,fetch etc)




//BROWSER CONTEXT API
//[ Browser huma in total teen chija data ha jo ha....window(padh liya)....stack....heap memory]

//STACK
/*
  |  c   |
  |  b   |
  |__a___| 
  when we add a,b,c serially to memory
*/

//HEAP MEMORY
/* jitna bhi variables ya data hum banata hai unhe store kahi to karna padta hai uske liya hota hai heap memory*/

//EX : akk calculation ko karta waqt jo bich ka inter mediate data hai jo jaurut hogi akka wo koi final answer nahi ho usa hum store karanga heap memory mai jaisa

//heap = 6  (which when gets added with 7 gives the final ans)
calc = 1+5+7
//end ma final ans print ho jayga



//EXECUTION CONTEXT :-
//    Execution context matlab jab bhi hum function chalayanga funcn apna akk khudka ek imaginary containor bana laga jisma uski teen cheeje hogi : 

//1) variables
//2) functions inside that parent function
//3)lexical environment of that function
//ya jo container ha imaginary hai issa hi hum execution context  kahata hai
//function chalta hi sath mai pahali chiz jo banti hai wo hai execution context mana akk imaginary dabba jiska andar tin chiz hoti ha ppahli variables jo huna funcn ka andar banai ha , agar huma iss funcn ka nadar koi aur funcn banaya ho wo , laxical environment jo batata hai ki hum kin chijo ko excess kar sakta ha aur kinko nahi

function abcd(){
    var a = 12;
    function def(){
        var b = 12;
    }
}
//isma akk abcd karka ek execution context matlab akk dabba banaga jisma 'a' hoga 'def' hoga aur iska lexical environment jaisa var b ka scope uska nearby parent funcn tak hoga jo ki ha def ussa hum abcd function sa nahi use kar sakta iss puri chiz ko execution context kahata ha

//execution context is a container where the functions code is executed and its ccreated wherever a function is called , it contains 3 things variables , functions and lexical environment






//LEXICAL ENVIRONMENT :-
//           Ya ek chart hota ha jisma ya likha hota hai ki aapka perticular function ki cheejo ko access kar sakta hai and kinko nahi , matlab ki it holds its scope and scope chain





//HOW TO COPY REFERENCE VALUES(by spread operator) :-

//spread operator is represented as 3 dots(...)

//EX1 :- Let us take an array 
var a = [1,2,3]
var b = a;// aisa ya copy nahi hua akk reference hua akk sa hataya to dusra sa bhi hat jayaga(already read)

var a = [1,2,3]
var b = [...a]; //matlab a ki velus ko copy karo aur waha rakh do jaha spread operator likha hai

b.pop();//matlab b sa akk value hat jayaga par wo a ka andar jaisa ka taisa present rahaiga

//EX2 :- same with objects
var obj = {name: "sagar"};
var copyobj = {...obj};

copyobj.name = "sagarika";






//TRUTHY AND FALSY :-

//js mein kuchh bhi likho wo mainly do prakaar main se kisi ek prakaar ko belong karti hai aur wo hain truthy and falsy(jaisa ki humna sagar likha to wo bhi inn dono ma sa kisi akk ko belong karaga)

//falsy values ya hai ={ 0 , false , undefined , null , NaN , document.all }
//(matlab inn sab ko decode karna par inki value convert karka falsy ayagi)

//truthy values(rest all jo falsy ma aya unhe chod ka)

//EX :
if(7){
    console.log("sagar");
}
else{
    console.log("hi");
}
//ya truthy ha kyun ki 7 falsy ma nahi jata aur wo falsy bala jo joi ha unma sa belong nahi karti ha

//EX : 
if(NaN){
    console.log("sagar");
}
else{
    console.log("hi");
}//in this  case if statement will not run becase NaN lies  in falsy so the else statement will run here



//SWITCH

switch(1){
    case 1 :
        break;
    case 2:
        break;
    default:        
}



//FOREACH  FORIN  DO-WHILE

//FORACH
//foreach loop sirf array pe chalta hai matlab ki jab bhi tumhaare paas ek array ho , tab use mein kun atta hai foreach loop

var a = [1,2,3,4,62,72,65,76,8,97];

a.forEach(function(val){
    console.log(val+2);
}
)//matlab 'a' array ka har akk value akk akk karka andar ayaga phir usma 2 add hoga aur wo print hoga..

//foreach kabhi bhi by default apka array main change nahi kartawo apko changes karka data hai array ki temporary copy par jiski wajah se array humasa same  rehta hai....matlab upar wala example ma 'a' same hi rahaga usma koi change nahi hoga uski copy ma changes hogi jo val ma bani hain


//FORIN
//object par loop karna ka liya hota hain forin loop

var obj = {
    name: "sagar",
    age: 20,
    city: "kaliabali"
}

for(var key in obj){
    console.log(key, obj[key]);
}
//key matlab name,age,city aur obj[key] matlab object ka andar ka key ki value



//DO-WHILE(not needed)

var a = 120;

do{
    console.log(hey);
    a++
}
while(a>15)
    //abb bhi iss case ma akk bar hey print hoga bcz pahla do chalaga phie while
//jis bhi case ma atleast akk bar kuch karna ho aur phir condition check karni ho waha pa do-while ka use hoga




//CALLBACK FUNCTIONS
//jab bhi koi aisa code jo baad me chalta hai app lakhoga, kyuki wo code baad mein chalta hai js ko ye pata nahi hota ke wo complete hua hai ya nahi, aise code ke completion par js ko bataya jaata hai ke wo complete hogaya aur app usa chala sakte ho, ye bataane ka kaam callback ka hai(jaisa humne akk ladki ko love letter diya ya kissi bacha ka hatto wo letter bhaja to huma uska response uss ladki sa kab tak ayaga huma pata nahi hota this is callback)


setTimeout(function(){
    console.log("2 second baad chala")
}, 2000);
//2000ms means 2 sec(means 2sec bad ya function chalaga)

//callback funcn akk normal funcn hota ha jo tab chalta ha jab kam khatam ho jaya iss case ma jaisa 2sec khatam hona ka bad funcn challa.
//aisa code jo bad main chalta hai use hum ek funcn dedete hai ke bhaiya jab complete hojaanato ya funcn chala dena, aur wo funcn jo hum dete hai wo ek normal funcn hi hota hai aur use kahte hai callback funcn






//WHAT IOS FIRST CLASS FUNCN:-

//js main akk concept hota hai jiska matlab hota hai ki aap funcn ko use kar sakta ho as an value
//var a = function(){};

function abcd(a){
    a();

}

abcd(function(){  console.log("dj sagar"); })//pahla hum 'a' mai value pass karta tha na ab hum funcn bhi pass kar sakta hai





//HOW ARRAYS ARE MADE BEHIND THE SCENES:-

var arr = [1,2,3,4];//in js this is an object not an array the js converts it to below...

arr = {
    0: 1,
    1: 2,
    2: 3,
    3: 4
}

arr[-1] = 2;//normally array ma -1 index nahi hota aur wo issi karan nahi chalta par isma chalaga aur jo resut ayaga wo hoga.....[1,2,3,4,-1:2]

//to check it is an array or not
//    Array.isArray([])......true(is ans)
//    Array.isArray({})......false(is ans)





//HOW TO DELEATE OBJECT PROPS

var a = {
    name: "sagar",
    age: 20
}

delete a.age;//age delete hojayaga