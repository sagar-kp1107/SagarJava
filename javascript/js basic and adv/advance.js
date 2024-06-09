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

//let and const doesnt adds itself to the window object 
//(EXPLAINED BELOW)

//js language ma kuch cheeje nahi hai jo hum use kar sakte hai aur wo cheeje hume js se nahi balki browserse milti hai,aise saare features jo js ka part nahi hai but fir bhi use kar sakte hai unhe hum dhoond sakte hai ek perticular object ma jiska naam hai window( example ka liya js ko akk pen samjho usa humne kaha kuch likhka batao ya draew karka batao ya page ma chad kardo.... agar hum pen ko bolta ha ki pen tum mara liya ak mob phn holder banado to pen kahata ha ya mara bas ki bat nahi hai .....to phir pen ak daba ka pas jayaga jiska pas bht sara features ha usma mob phn stand dhund ka laka ayaga to phn stand pen ka khud ka feature nahi hai to ya usa uss dabba sa laka aya jisaka nam ha window....to dabba ka jitna bhi chija wo js ka to part nahi hai wo sab browser ka part ha............EXAMPLE : alert , promt, console ,fetch etc)

