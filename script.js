const loginButton = document.getElementById("loginButton");
const enterButton = document.getElementById("enterButton");

const startScreen = document.getElementById("startScreen");
const loginScreen = document.getElementById("loginScreen");

// 등록된 인원 목록
const users = {
    "돌로레스": "1234",
    "관리자": "0000",
    "연구원": "1111"
};


loginButton.onclick = function () {
    startScreen.style.display = "none";
    loginScreen.style.display = "block";
};


enterButton.onclick = function () {

    let name = document.getElementById("username").value;
    let password = document.getElementById("password").value;


    if (users[name] && users[name] === password) {

        alert(name + "님, SCHMEETTERLING 접속 승인.");

        window.location.href = "main.html";

    } else {

        alert("접근 권한이 없습니다.");
    }
};