let money =
Number(localStorage.getItem("myowolMoney"))
|| 0;



let inventory =
JSON.parse(
localStorage.getItem("myowolInventory")
)
|| [];



let catClick = 0;

let idleTimer;



// 시작

window.onload=function(){


updateMoney();

updateInventory();

startDust();

startCandle();

startIdle();


};





// 돈 표시

function updateMoney(){


document.getElementById("money").innerHTML =

money.toLocaleString();


localStorage.setItem(
"myowolMoney",
money
);


}






// 구매

function buyItem(name,price){


if(money < price){


ownerTalk(
"돈이 조금 부족하다냥..."
);


return;

}




money -= price;


inventory.push(name);



updateMoney();

updateInventory();



ownerTalk(

name+
"을(를) 구매했다냥~"

);



}








// 점장 대사


function talkOwner(){


let words=[


"어서오라냥~",

"오늘도 찾아와줬다냥?",

"좋은 물건이 많이 있다냥.",

"고양이들은 손님을 기억한다냥.",

"천천히 둘러보라냥~"

];



ownerTalk(

words[
Math.floor(Math.random()*words.length)
]

);


}






function ownerTalk(text){


document.getElementById(
"ownerSpeech"
).innerHTML=text;


}








// 가방


function openBag(){


document
.getElementById("inventory")
.classList.add("open");


updateInventory();


}




function closeBag(){


document
.getElementById("inventory")
.classList.remove("open");


}







// 가방 표시


function updateInventory(){


let box =
document.getElementById("inventoryList");



if(inventory.length===0){


box.innerHTML=
"보유 아이템 없음";


return;


}



box.innerHTML="";



inventory.forEach(function(item,index){



box.innerHTML +=



`

<div class="bagItem">


<p>
🐈 ${item}
</p>


<button onclick="useItem(${index})">

사용

</button>



<button onclick="deleteItem(${index})">

폐기

</button>


</div>


`;



});



localStorage.setItem(

"myowolInventory",

JSON.stringify(inventory)

);


}








// 아이템 사용

function useItem(index){


let item = inventory[index];

let text="";



switch(item){


case "💊 기억 복원 캡슐":

text=
"잊어버린 기억이 돌아오기 시작한다...\n\n하지만 가장 슬픈 기억부터 떠오른다.";

break;



case "💉 청춘 혈청":

text=
"몸이 가벼워진다.\n\n시간이 되돌아간 느낌이 든다.";

break;



case "⏳ 시간 정지 모래시계":

text=
"주변의 시간이 멈췄다.\n\n30초 동안 당신만 움직일 수 있다.";

break;



case "🌌 차원 열쇠":

text=
"공간이 갈라진다.\n\n어딘가로 이어지는 문이 열렸다.";

break;



case "🪽 천사의 날개":

text=
"등 뒤에서 날개가 펼쳐진다.\n\n하늘을 날 수 있을 것 같다.";

break;



case "💀 사자의 부활약":


text=
"점장이 조용히 바라본다냥.\n\n"+
"정말... 돌아오길 원하는 존재가 있나냥?";


break;



default:


text=
item+
"\n\n사용되었다냥.";

break;


}




alert(text);



ownerTalk(

"사용 완료했다냥~"

);



inventory.splice(index,1);



updateInventory();


}






// 폐기


function deleteItem(index){


if(confirm(

"정말 폐기하시겠습니까?"

)){


inventory.splice(index,1);


updateInventory();


}

}









// 주문


function makeOrder(){


let text =

document.getElementById(
"orderInput"
).value;



if(text.trim()==""){

return;

}



let result=[


"찾아보겠다냥~",

"그 물건은 아직 발견되지 않았다냥.",

"흥미로운 주문이다냥.",

"언젠가 나타날 수도 있다냥."

];



ownerTalk(

result[
Math.floor(Math.random()*result.length)
]

);



document.getElementById(
"orderInput"
).value="";



}

// =============================
// 猫月 GAME SYSTEM
// =============================


function startGame(){


let box =
document.getElementById("gameWindow");


let content =
document.getElementById("gameContent");



box.classList.add("active");



let game =
Math.floor(Math.random()*3);



if(game===0){

cardGame();

}


else if(game===1){

candleGame();

}


else{

catGame();

}



}



// =============================
// 🃏 카드 게임
// =============================


function cardGame(){


let content =
document.getElementById("gameContent");



content.innerHTML=


`

<h3>
🃏 운명의 카드
</h3>


<p>
황금 카드를 찾아라.
</p>


<button onclick="cardPick(0)">
🂠
</button>


<button onclick="cardPick(1)">
🂠
</button>


<button onclick="cardPick(2)">
🂠
</button>


`;



}



function cardPick(num){


let answer =
Math.floor(Math.random()*3);



if(num===answer){


gameSuccess();


}

else{


gameFail();


}



}





// =============================
// 🕯 촛불 게임
// =============================


function candleGame(){


let content =
document.getElementById(
"gameContent"
);



content.innerHTML=


`

<h3>
🕯 영혼의 촛불
</h3>


<p>
진짜 불꽃을 선택하세요.
</p>


<button onclick="candlePick(0)">
🕯
</button>


<button onclick="candlePick(1)">
🕯
</button>


<button onclick="candlePick(2)">
🕯
</button>


<button onclick="candlePick(3)">
🕯
</button>


`;



}



function candlePick(num){


let answer =
Math.floor(Math.random()*4);



if(num===answer){


gameSuccess();


}

else{


gameFail();


}



}






// =============================
// 🐈 고양이 게임
// =============================


function catGame(){


let content =
document.getElementById(
"gameContent"
);



content.innerHTML=


`

<h3>
🐈 고양이의 선택
</h3>


<p>
행운을 가진 고양이를 선택하세요.
</p>


<button onclick="catPick(0)">
🐈‍⬛
</button>


<button onclick="catPick(1)">
🐈
</button>


<button onclick="catPick(2)">
🐱
</button>


`;



}



function catPick(num){


let answer =
Math.floor(Math.random()*3);



if(num===answer){


gameSuccess();


}

else{


gameFail();


}

}




// =============================
// 성공 / 실패
// =============================


function gameSuccess(){


money += 40000000000;


updateMoney();



alert(

"✨ 이상 현상 발생\n\n"+
"400억 원이 지급되었습니다."

);



ownerTalk(

"축하한다냥~\n"+
"고양이가 운을 나눠줬다냥."

);



closeGame();



}




function gameFail(){


alert(

"실패했다냥...\n\n"+
"다시 도전할 수 있다냥."

);



ownerTalk(

"아쉽다냥.\n"+
"다음에는 성공할 수도 있다냥."

);



closeGame();


}




function closeGame(){


document
.getElementById("gameWindow")
.classList.remove("active");


}


























// 고양이 클릭


document
.getElementById("walkingCat")
.onclick=function(){


catClick++;



if(catClick>=10){


if(
!inventory.includes(
"CAT STICKER"
)
){


inventory.push(
"CAT STICKER"
);


updateInventory();



ownerTalk(
"고양이가 마음에 들어했다냥~"
);


}



catClick=0;


}

else{


ownerTalk(
"고양이가 당신을 바라본다냥."
);


}



};









// 촛불 생성


function startCandle(){


let area =
document.getElementById(
"candleArea"
);



for(let i=0;i<20;i++){


let c=document.createElement(
"div"
);


c.className="candle";


c.innerHTML="🕯";


c.style.left=
Math.random()*100+"%";


c.style.top=
Math.random()*100+"%";


area.appendChild(c);


}


}







// 먼지 생성


function startDust(){


let area =
document.getElementById(
"dustArea"
);



for(let i=0;i<40;i++){


let d=document.createElement(
"div"
);


d.className="dust";


d.style.left=
Math.random()*100+"%";


d.style.animationDelay=
Math.random()*10+"s";



area.appendChild(d);


}



}









// 30초 방치 이벤트


function startIdle(){



resetIdle();



document.addEventListener(

"mousemove",

resetIdle

);



document.addEventListener(

"click",

resetIdle

);



}



function resetIdle(){


clearTimeout(idleTimer);



idleTimer=setTimeout(function(){


let box=
document.getElementById(
"idleMessage"
);



box.classList.add("show");



setTimeout(function(){


box.classList.remove("show");


},3000);



},30000);



  }
