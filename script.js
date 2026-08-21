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
    "김개화": {password:"1210", level:"신"}

};





// 시작 화면 → 로그인 화면

if(loginButton){

    loginButton.onclick = function(){

        startScreen.style.display = "none";

        loginScreen.style.display = "block";

    };

}







// 로그인 처리

if(enterButton){

    enterButton.onclick = function(){


        let name =
        document.getElementById("username").value.trim();


        let password =
        document.getElementById("password").value.trim();





        if(users[name] && users[name].password === password){



            localStorage.setItem(
                "userName",
                name
            );


            localStorage.setItem(
                "userLevel",
                users[name].level
            );





            location.href="./loading.html";



        }



        else{


            alert("접근 권한이 없습니다.");


        }



    };

}






// 접속자 표시

window.addEventListener("load", function(){



    let name =
    localStorage.getItem("userName");


    let level =
    localStorage.getItem("userLevel");




    if(document.querySelector(".userInfo")){

        return;

    }




    if(name){



        let box =
        document.createElement("div");



        box.className="userInfo";



        box.innerHTML = `

        현재 접속자 :
        <span>${name}</span>

        <br>

        LEVEL :
        <span>${level}</span>

        <br><br>


        `;



        document.body.appendChild(box);



    }



});
