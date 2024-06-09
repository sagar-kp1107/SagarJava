//word{he,she,good,bad....}
//keyword{for,is,else....}

//var and const(ya eng ka words ha prog ka nahi nalle)
score = 0
lives = 3 //in a game when u die the lives get 0
//code ma koi bhi data store karna ka liya jiska use hota ha usa kahate he varaibles
//var-jiski value badle
//const-jiski value na badle

var dulha = "lab";
var dulhan = "labby";

console.log(dulha + "weds" + dulhan);
//dulha ka ex ka nam tha haramjada usna hack karka comp ko dulha ka nam ka jagha apna nam likh liya sadi ka card par
dulha = "haramjada";
console.log(dulha + "weds" + dulhan);
//isliya hum hamare labby ko bachana ka liya lab aur labby dono ko var ka jagha const kar danga

//LET
let a = 12;
//mainly 3 diff

 //HOISTING(diff than hosting)
 //var ko banana sa pahala hi use kar sakta ha iski madad se
 console.log(a);
 var a = 12;
 //var and functions are hoisted which means their declaration is moved on top of the code

 var a=12;//js convert this to below

 var a;//declarition
 a = 12;//inatilization
//......the decleration get move to the top......
//agar kisi var ko value na diya ho to uski value undefined hoti ha

//EX....
console.log(a);
var a = 12;
//ans u will get is as undefined
//as undefined is a value in other lang u will get an error or not defined as ans(means no existance)



//TYPES IN JS
//....primitives = number, string, null, undefined, boolean
//....reference = {} () []

//asi koi bhi value jisko copy karna par real copy nahi hota , balki us main value ka refference pass ho jata ha usa hum refference value kahata ha,aur jiska copy karna par real copy ho jay wo primitive value hota ha

var a = [1,2,3,4];
var b = a;
b.pop();//b ma jo a copy kia tha uska akhri element hat gaya b sa
console.log(b); // 12
console.log(a); //bhi val 12 ho gayi ha
//EX-- mara phn barsha ka bhi phn ha aur barsha na phn phak diya to hum dono ka phn gaya na (this is called as reference type)
//ref wala means bracket wala copy ho sakta ha but directly copy nahi ho sakta




//CONDITIONALS(if,else,else-if)
//jab bhi bat agar magar par ayagi , yaa phir bat aayagi asa hua to ya karo wasa hua to wo karo tab conditionals use hoga

if()//is bracket ka andar kuch asa hi ayaga jiska ans tru ho ya false ho

//agar ko bc likha 
if("apple")//then also it runs but it comes under truthy and falsy

//if the if() comes to be false then the else will run 



//LOOPS(for,while loop)
//loop matlab repeat
//ex--111111111..repetation of numbers and proint statement both
//    123456789..repetation of only print statement
//means every time when u say print that is a loop

//FOR LOOP
/*for(start;end;change){

}*/

//ques-print fron 0 to 10
for(var i = 0; i<11; i++){
    console.log(i)
}

//WHILE LOOP
//iska bracket ma kuch aisa likho jo true ya false ho jaye
while(condition){

}
//jab tak true hoga chalta rahaga code browser hang kar dega

var a = 12;

while(a<20){
    a++;
}


//FUNCTIONS
//function ka matlab app kuch code ko likhka kuch nam da sakta ho and bad main usa use kar sakta ho with that name as many times(function=code ko naam dena)
//functions mainly teen kam ka liya hota ha
//1-jab apka code app turant nahi chalana chaate ho future ma chalaana chaate ho
//2-jab apka code app reuse karna chate ho
//3-jab app code chalana chaahte ho har baar with different data (parameters and arguments been used)

function abcd(){
//this is called as function statement
console.log("sagar");
}
abcd();//function call

//basically there are 6 styles of function making

function sagar(a,b,c){
    console.log(a,b,c);

}
sagar(12,11,45);//yaa 12,11,45 upar sagar ma receive hoga means a=12,b=11,c=45
//herea,b,c are parameters...variables jisme value store hoti ha arguments wali
//and the 12,11,45 are arguments...realvalue jo hum data ha function chalate waqt



//ARRAYS
//arrays = hum akk var ma ek value store kar pate ha par jab humein ek sa jyada value store karni ho tab fir use hota hai array ka , matlab ki array aapko freedom data hai ek se jaada value use karna ki(group of values)

var arr  = [1,2,3,4,5]
//index in array starts with 0



//PUSH POP SHIFT UNSHIFT
var arr  = [1,2,3,4,5]
arr.push(8);//to add an extra member in the array
arr.pop();//array se akk member hatana ka liya 
arr.unshift(0);//array ka suru ma akk member add karna ka liya
arr.shift();//array sa suru ki akk value hatana ka liya
arr.splice(2,1)//bich sa koi value hatana ka liya "arr.splice(kaha se , kitni value)".....issa 3 hat jayaga array ma sa
//iss array ma element and their index ha 1-0,2-1,3-index is 2.......so on


//OBJECTS
//ekk sa jyada banda ki bat ki to hua array,ek bande ke baare mein saari baat ki to hua object...
//ex-panigrahy jo barsha ka bhai ha(individual)

//akk banda ki details ko hold karna,in a key value pair

//1)blank object
var a = {};

//2)filled object
var a = {
    age:20,
    name:"sagar",
    email:"sagarkp_1107@gmail.com",
    contact:8455874514
    kuchhbolo: function(){}//method:object ka andar asi property jiski value function ho

}
//akk bande ki sari detail is an object

//how to axcess the value
a.age

//the age,name,email all are called as properties


//UPDATING OBJECT PROPERTIES
a.name = "rinku"