// ===============================
// 百密斋 SYSTEM
// ===============================


// 돈 불러오기

let money =
Number(localStorage.getItem("money"))
|| 0;



let bag =
JSON.parse(localStorage.getItem("baekBag"))
|| [];





window.onload=function(){

updateMoney();

showBag();

};





// ===============================
// 돈 표시
// ===============================


function updateMoney(){


let box=document.getElementById("money");


if(box){

box.innerHTML =
money.toLocaleString();

}


localStorage.setItem(
"money",
money
);


}








// ===============================
// 백밀재 주인 대사
// ===============================


function talkOwner(){


let text=[


"모든 정보에는 값이 있습니다.",


"알고 싶은 만큼, 대가는 커집니다.",


"기록은 거짓말하지 않습니다.",


"당신이 찾는 답은 이미 어딘가에 존재합니다."


];


document.getElementById("ownerTalk").innerHTML=

text[
Math.floor(Math.random()*text.length)
];


}









// ===============================
// 직원 데이터
// ===============================


let staffData={


"할파스":{

level:"STAFF",

info:
"화학 부서 담당자.\n위험 물질 연구 기록 보유."

},


"페르세포네":{

level:"STAFF",

info:
"생물 관련 기록.\n특수 연구 참여 이력 존재."

},


"세실리아":{

level:"STAFF",

info:
"중앙 시스템 관련 기록.\n접근 권한 확인 필요."

},


"시월":{

level:"STAFF",

info:
"기록상 행동 패턴 분석 가능."

},


"피피":{

level:"STAFF",

info:
"생물 부서 관련 정보 존재."

},


"오닉스":{

level:"STAFF",

info:
"검은 기록 보관 대상."

},


"히메":{

level:"STAFF",

info:
"특수 임무 기록 존재."

},


"양메이":{

level:"STAFF",

info:
"동양권 연구 기록 확인 가능."

},


"칭위":{

level:"STAFF",

info:
"정보 열람 제한 대상."

},


"레이미":{

level:"STAFF",

info:
"과거 기록 일부 보관."

},


"미아":{

level:"STAFF",

info:
"기본 기록 열람 가능."

},


"망량":{

level:"STAFF",

info:
"특수 개체 관련 기록."

},


"벨페고르":{

level:"STAFF",

info:
"위험 등급 기록 존재."

},


"녹스":{

level:"STAFF",

info:
"야간 활동 기록 확인 가능."

}


};








// ===============================
// 직원 검색
// ===============================


function searchPerson(){


let name =
document.getElementById("searchInput").value;



let box =
document.getElementById("staffInfo");



if(staffData[name]){


box.innerHTML=

`

<h3>
${name}
</h3>

<p>
등급 :
${staffData[name].level}
</p>


<p>
${staffData[name].info}
</p>


<p>
열람 가능한 기록을 선택하십시오.
</p>

`;


}

else{


box.innerHTML=

"해당 기록을 찾을 수 없습니다.";


}


}








// ===============================
// 정보 구매
// ===============================


function buyInfo(name,price){



if(money < price){


showResult(
"금액 부족.\n정보 또한 거래가 필요합니다."
);


return;


}



money-=price;


bag.push(name);



localStorage.setItem(
"baekBag",
JSON.stringify(bag)
);



updateMoney();

showBag();



showResult(

"📖 열람 완료\n\n"+
name+
"\n\n기록이 보관함에 저장되었습니다."

);



}








// ===============================
// 주문
// ===============================


function makeOrder(){


let text =
document.getElementById("orderInput").value;



if(text=="")return;



document.getElementById(
"orderResult"
).innerHTML=

`

📜 주문 접수 완료

<br><br>

요청 :
${text}

<br><br>

백밀재 직원이 기록을 검색합니다.

`;



}








// ===============================
// 가방
// ===============================


function openBag(){


document.getElementById(
"bag"
).style.display="block";


showBag();


}



function closeBag(){


document.getElementById(
"bag"
).style.display="none";


}





function showBag(){


let box=
document.getElementById("bagList");



if(!box)return;



if(bag.length==0){


box.innerHTML=
"보관된 정보 없음";


return;


}



box.innerHTML="";



bag.forEach(function(item){


box.innerHTML+=

`

<p>
📖 ${item}
</p>

`;



});


}








// ===============================
// 결과창
// ===============================


function showResult(text){


document.getElementById(
"resultText"
).innerHTML=

text.replace(/\n/g,"<br>");



document.getElementById(
"resultWindow"
).style.display="block";


}



function closeResult(){


document.getElementById(
"resultWindow"
).style.display="none";


}
