// ===============================
// 冥牌館 SYSTEM
// ===============================


// 돈 불러오기

let money =
Number(localStorage.getItem("money"))
|| 0;



let inventory =
JSON.parse(localStorage.getItem("nameInventory"))
|| [];




window.onload=function(){

updateMoney();

showInventory();

createStars();

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
// 점술사 대사
// ===============================


function talkTeller(){


let talks=[


"운명은 이미 적혀있거든요~... 하지만 선택은 당신의 몫♡",


"카드는 거짓말하지 않아요. 거짓말하는 것은 인간뿐이죠~.",


"보이지 않는 길도 이미 어딘가에 존재해요.",


"별들은 당신의 선택을 기록하고 있습니다."

];

let text =
talks[
Math.floor(Math.random()*talks.length)
];



document.getElementById(
"tellerTalk"
).innerHTML =
text.replace(/\n/g,"<br>");

}





// ===============================
// 운세 보기
// ===============================


function readFortune(name,price){



let count =
Number(localStorage.getItem("fortuneCount"))
||0;



let today =
localStorage.getItem("fortuneDate");



let now =
new Date().toDateString();



if(today!==now){

count=0;

localStorage.setItem(
"fortuneDate",
now
);

}



if(count>=2){


showResult(

"오늘의 운명은 이미 충분히 읽혔습니다."

);


return;


}





if(money < price){


showResult(

"금액이 부족합니다.\n운명도 대가는 필요한법. 자본주의 자본주의~."

);


return;


}



money-=price;


count++;



localStorage.setItem(
"fortuneCount",
count
);



updateMoney();



let results=[


"좋은 기회가 찾아옵니다.\n하지만 쉽게 잡히지는 않습니다.",


"가까운 미래에 중요한 선택이 기다리고 있습니다.",


"숨겨진 관계가 모습을 드러냅니다.",


"당신이 피하려던 길이 다시 나타납니다.",


"예상하지 못한 행운이 찾아옵니다."


];



showResult(

"🔮 "+name+
"\n\n"+
results[
Math.floor(Math.random()*results.length)
]

);



}




// ===============================
// 타로
// ===============================


let tarot=[


{

name:"THE FOOL",

text:"새로운 시작.\n하지만 위험도 함께합니다."

},


{

name:"THE MAGICIAN",

text:"가능성이 현실이 됩니다."

},


{

name:"THE HIGH PRIESTESS",

text:"숨겨진 진실을 발견합니다."

},


{

name:"THE LOVERS",

text:"중요한 인연이 나타납니다."

},


{

name:"THE DEATH",

text:"끝은 새로운 시작을 의미합니다."

},


{

name:"THE MOON",

text:"보이지 않는 것이 움직이고 있습니다."

},


{

name:"THE SUN",

text:"강한 행운이 따릅니다."

},


{

name:"THE WORLD",

text:"하나의 이야기가 완성됩니다."

}


];







function drawCard(num){



let card =

tarot[
Math.floor(Math.random()*tarot.length)
];



let result=document.getElementById(
"tarotResult"
);



result.innerHTML=


`

<div class="flipCard">

🃏

</div>


<h3>

${card.name}

</h3>


<p>

${card.text}

</p>

`;



showResult(

"🃏 "+card.name+
"\n\n"+
card.text

);



}









// ===============================
// 아이템 구매
// ===============================


function buyItem(name,price){



if(money < price){


showResult(
"돈이 부족합니다."
);


return;


}



money-=price;



inventory.push(name);



localStorage.setItem(
"nameInventory",
JSON.stringify(inventory)
);



updateMoney();


showInventory();



showResult(

name+
"\n구매 완료."

);


}









// ===============================
// 가방
// ===============================



function openInventory(){


showInventory();


document.getElementById(
"inventory"
).style.display="block";


}



function showInventory(){


let box =
document.getElementById(
"inventory"
);



if(!box)return;



if(inventory.length===0){


box.innerHTML=
"보유 물품 없음";


return;


}



box.innerHTML="";


inventory.forEach(function(item,index){



box.innerHTML+=


`

<p>

${item}

<button onclick="removeItem(${index})">

폐기

</button>


</p>

`;


});



}



function removeItem(index){


inventory.splice(index,1);



localStorage.setItem(

"nameInventory",

JSON.stringify(inventory)

);



showInventory();


}








// ===============================
// 결과창
// ===============================


function showResult(text){



let box=document.getElementById(
"resultText"
);


if(box){

box.innerHTML=
text.replace(/\n/g,"<br>");

}



document.getElementById(
"resultWindow"
)
.style.display="block";


}




function closeResult(){


document.getElementById(
"resultWindow"
)
.style.display="none";


}









// ===============================
// 은하수 별 애니메이션
// ===============================


function createStars(){


let area=
document.getElementById(
"starArea"
);



if(!area)return;



for(let i=0;i<80;i++){


let star=document.createElement(
"span"
);


star.className="star";


star.style.left=
Math.random()*100+"%";


star.style.top=
Math.random()*100+"%";



star.style.animationDelay=
Math.random()*5+"s";



area.appendChild(star);


}


}
// ===============================
// 冥牌館 MINI GAME
// ===============================


function startMyeongGame(){


let box =
document.getElementById(
"myeongGameWindow"
);


box.style.display="block";


let game =
Math.floor(Math.random()*3);



if(game===0){

tarotGame();

}

else if(game===1){

crystalGame();

}

else{

lampGame();

}


}



// 🃏 타로 카드
function tarotGame(){


document.getElementById(
"myeongGameContent"
).innerHTML=

`

<h3>
🃏 운명의 카드
</h3>

<p>
카드를 선택하세요.
</p>


<div class="tarotArea">


<div class="tarotCard"
onclick="flipTarot(0)">

🂠

</div>


<div class="tarotCard"
onclick="flipTarot(1)">

🂠

</div>


<div class="tarotCard"
onclick="flipTarot(2)">

🂠

</div>


</div>

`;

}

function flipTarot(num){


let cards =
document.querySelectorAll(".tarotCard");


cards[num].classList.add(
"flip"
);



let answer =
Math.floor(Math.random()*3);



setTimeout(function(){


if(num===answer){


cards[num].innerHTML=
"✨";


myeongSuccess();


}

else{


cards[num].innerHTML=
"☠";


myeongFail();


}


},800);


}

// 🔮 수정구

function crystalGame(){


document.getElementById(
"myeongGameContent"
).innerHTML=


`

<h3>
🔮 천성 수정구
</h3>

<p>
빛나는 미래를 선택하세요.
</p>


<button onclick="pickCrystal(0)">
🔵
</button>

<button onclick="pickCrystal(1)">
🟣
</button>

<button onclick="pickCrystal(2)">
⚪
</button>

`;

}



function pickCrystal(num){


if(num===Math.floor(Math.random()*3)){


myeongSuccess();


}

else{


myeongFail();

}


}





// 🕯 혼등

function lampGame(){


document.getElementById(
"myeongGameContent"
).innerHTML=


`

<h3>
🕯 혼등
</h3>

<p>
진짜 영혼의 불꽃을 찾으세요.
</p>


<button onclick="pickLamp(0)">
🕯
</button>

<button onclick="pickLamp(1)">
🕯
</button>

<button onclick="pickLamp(2)">
🕯
</button>

<button onclick="pickLamp(3)">
🕯
</button>


`;

}



function pickLamp(num){


if(num===Math.floor(Math.random()*4)){


myeongSuccess();


}

else{


myeongFail();

}


}





// 성공

function myeongSuccess(){


money += 40000000000;


updateMoney();


showResult(

"✨ 운명이 허락했습니다.\n\n400억 원 획득."

);


document.getElementById(
"tellerTalk"
).innerHTML=

"축하드립니다.\n카드는 당신의 가능성을 보여주었습니다.";

}



// 실패

function myeongFail(){


showResult(

"🃏 카드가 침묵합니다.\n\n운명은 아직 닫혀 있습니다."

);


document.getElementById(
"tellerTalk"
).innerHTML=

"아직은 그 카드가 당신의 것이 아니군요.";

}
