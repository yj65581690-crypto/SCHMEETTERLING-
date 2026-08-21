const loginButton = document.getElementById("loginButton");
const enterButton = document.getElementById("enterButton");

const startScreen = document.getElementById("startScreen");
const loginScreen = document.getElementById("loginScreen");



// SCHMEETTERLING 직원 DB

const users = {

    "할파스": {password:"1210", level:"책임자"},
    "미아": {password:"1210", level:"책임자"},
    "페르세포네": {password:"1210", level:"직원"},
    "세실리아": {password:"1210", level:"직원"},
    "시월": {password:"1210", level:"책임자"},
    "피피": {password:"1210", level:"직원"},
    "오닉스": {password:"1210", level:"책임자"},
    "히메": {password:"1210", level:"직원"},
    "양메이": {password:"1210", level:"책임자"},
    "칭위": {password:"1210", level:"직원"},
    "레이미": {password:"1210", level:"직원"},
    "셀레스트": {password:"1210", level:"책임자"},
    "아우구스투스": {password:"1210", level:"직원"},
    "망량": {password:"1210", level:"직원"},
    "벨페고르": {password:"1210", level:"책임자"},
    "녹스": {password:"1210", level:"직원"},
    "카인 벨라토프": {password:"1210", level:"사장"},
    "보거": {password:"0609", level:"보거북이"},
    "김개화": {password:"1210", level:"신"},
    "임하정": {password:"0630", level:"노예"}



};




// 로그인 화면 열기

if(loginButton){

loginButton.onclick=function(){

    startScreen.style.display="none";

    loginScreen.style.display="block";

};

}




// 로그인

if(enterButton){

enterButton.onclick=function(){


let name =
document.getElementById("username").value.trim();


let password =
document.getElementById("password").value.trim();


// 릴린 이스터에그

if(
name=="릴린" ||
name.toLowerCase()=="lilin"
){

startLilinEvent();

return;

}
if(users[name] && users[name].password === password){


    localStorage.setItem(
        "userName",
        name
    );


    localStorage.setItem(
        "userLevel",
        users[name].level
    );


    // 로딩 화면 이동

    location.href="./loading.html";


}


else{

    alert("접근 권한이 없습니다.");

}


};


}
function startLilinEvent(){


document.body.innerHTML="";


document.body.style.background="black";

document.body.style.color="red";

document.body.style.fontFamily="monospace";

document.body.style.textAlign="center";

document.body.style.overflow="hidden";



let words=[

"ERROR",
"UNKNOWN ENTITY",
"ACCESS DENIED",
"SIGNAL LOST",
"FILE CORRUPTED",
"DO NOT LOOK",
"HELP",
"LILIN",
"NO ESCAPE",
"████████"

];



let count=0;



let timer=setInterval(function(){



document.body.style.transform=

"translate("+

(Math.random()*20-10)+

"px,"+

(Math.random()*20-10)+

"px)";



let text=document.createElement("div");


text.innerHTML=
words[Math.floor(Math.random()*words.length)];



text.style.position="absolute";

text.style.left=Math.random()*90+"%";

text.style.top=Math.random()*90+"%";

text.style.fontSize=
(20+Math.random()*30)+"px";

text.style.color="red";



document.body.appendChild(text);



count++;



if(count>80){


clearInterval(timer);



document.body.innerHTML=`

<h1 style="
margin-top:200px;
font-size:100px;
animation:flash .2s infinite;
">

돌아가

</h1>

`;



setTimeout(function(){

location.href="index.html";

},3000);



}



},50);


}
