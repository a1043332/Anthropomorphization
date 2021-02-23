//    2/23之後的

var maxFood = 7;
var maxLife = 26;
var maxHome = 5;
var maxComputer = 16;
var maxSport = 15;
var maxAccessory = 9;



var questionsNum = 5;
var picturesList = getRandomList(questionsNum);
var questionsCount = 0;
var yesCount = 0, noCount = 0;
var btn1Count = 0, btn2Count = 0, btn3Count = 0, btn4Count = 0, btn5Count = 0, btn6Count = 0;

function start() {
    questionsCount++;
    $(".buyText1").show(); $(".buyText2").show(); $(".btn1").show(); $(".btn2").show(); $(".btn3").show(); $(".btn4").show(); $(".btn5").show(); $(".btn6").show();
    var mainPicture = document.querySelector('.pictureArea');
    mainPicture.innerHTML = '<img src="pictures/main' + picturesList[questionsCount - 1] + '.png" class="mainPicture" alt=""> ';
}
function sayYes() {
    yesCount++;
    questionsCount++;
    var mainPicture = document.querySelector('.pictureArea');
    if (questionsCount <= questionsNum) {
        mainPicture.innerHTML = '<img src="pictures/main' + picturesList[questionsCount - 1] + '.png" class="mainPicture" alt=""> ';
    }
    else {
        mainPicture.innerHTML = '<div class="thankYou" onclick="backToHome()">謝謝您的幫忙~</div>';
        $(".btnYes").hide();
        $(".btnNo").hide();
    }
}
function sayNo() {
    noCount++;
    questionsCount++;
    var mainPicture = document.querySelector('.pictureArea');
    if (questionsCount <= questionsNum) {
        mainPicture.innerHTML = '<img src="pictures/main' + picturesList[questionsCount - 1] + '.png" class="mainPicture" alt=""> ';
    }
    else {
        mainPicture.innerHTML = '<div class="thankYou" onclick="backToHome()">謝謝您的幫忙~</div>';
        $(".btnYes").hide();
        $(".btnNo").hide();
    }
}
function say1() {
    btn1Count++;
    questionsCount++;
    var mainPicture = document.querySelector('.pictureArea');
    if (questionsCount <= questionsNum) {
        mainPicture.innerHTML = '<img src="pictures/main' + picturesList[questionsCount - 1] + '.png" class="mainPicture" alt=""> ';
    }
    else {
        mainPicture.innerHTML = '<div class="thankYou" onclick="backToHome()">謝謝您的幫忙~</div>';
        $(".buyText1").hide(); $(".buyText2").hide(); $(".btn1").hide(); $(".btn2").hide(); $(".btn3").hide(); $(".btn4").hide(); $(".btn5").hide(); $(".btn6").hide();
        sendSheet()
    }
}
function say2() {
    btn2Count++;
    questionsCount++;
    var mainPicture = document.querySelector('.pictureArea');
    if (questionsCount <= questionsNum) {
        mainPicture.innerHTML = '<img src="pictures/main' + picturesList[questionsCount - 1] + '.png" class="mainPicture" alt=""> ';
    }
    else {
        mainPicture.innerHTML = '<div class="thankYou" onclick="backToHome()">謝謝您的幫忙~</div>';
        $(".buyText1").hide(); $(".buyText2").hide(); $(".btn1").hide(); $(".btn2").hide(); $(".btn3").hide(); $(".btn4").hide(); $(".btn5").hide(); $(".btn6").hide();
        sendSheet()
    }
}
function say3() {
    btn3Count++;
    questionsCount++;
    var mainPicture = document.querySelector('.pictureArea');
    if (questionsCount <= questionsNum) {
        mainPicture.innerHTML = '<img src="pictures/main' + picturesList[questionsCount - 1] + '.png" class="mainPicture" alt=""> ';
    }
    else {
        mainPicture.innerHTML = '<div class="thankYou" onclick="backToHome()">謝謝您的幫忙~</div>';
        $(".buyText1").hide(); $(".buyText2").hide(); $(".btn1").hide(); $(".btn2").hide(); $(".btn3").hide(); $(".btn4").hide(); $(".btn5").hide(); $(".btn6").hide();
        sendSheet()
    }
}
function say4() {
    btn4Count++;
    questionsCount++;
    var mainPicture = document.querySelector('.pictureArea');
    if (questionsCount <= questionsNum) {
        mainPicture.innerHTML = '<img src="pictures/main' + picturesList[questionsCount - 1] + '.png" class="mainPicture" alt=""> ';
    }
    else {
        mainPicture.innerHTML = '<div class="thankYou" onclick="backToHome()">謝謝您的幫忙~</div>';
        $(".buyText1").hide(); $(".buyText2").hide(); $(".btn1").hide(); $(".btn2").hide(); $(".btn3").hide(); $(".btn4").hide(); $(".btn5").hide(); $(".btn6").hide();
        sendSheet()
    }
}
function say5() {
    btn5Count++;
    questionsCount++;
    var mainPicture = document.querySelector('.pictureArea');
    if (questionsCount <= questionsNum) {
        mainPicture.innerHTML = '<img src="pictures/main' + picturesList[questionsCount - 1] + '.png" class="mainPicture" alt=""> ';
    }
    else {
        mainPicture.innerHTML = '<div class="thankYou" onclick="backToHome()">謝謝您的幫忙~</div>';
        $(".buyText1").hide(); $(".buyText2").hide(); $(".btn1").hide(); $(".btn2").hide(); $(".btn3").hide(); $(".btn4").hide(); $(".btn5").hide(); $(".btn6").hide();
        sendSheet()
    }
}
function say6() {
    btn6Count++;
    questionsCount++;
    var mainPicture = document.querySelector('.pictureArea');
    if (questionsCount <= questionsNum) {
        mainPicture.innerHTML = '<img src="pictures/main' + picturesList[questionsCount - 1] + '.png" class="mainPicture" alt=""> ';
    }
    else {
        mainPicture.innerHTML = '<div class="thankYou" onclick="backToHome()">謝謝您的幫忙~</div>';
        $(".buyText1").hide(); $(".buyText2").hide(); $(".btn1").hide(); $(".btn2").hide(); $(".btn3").hide(); $(".btn4").hide(); $(".btn5").hide(); $(".btn6").hide();
        sendSheet()
    }
}

function nextStep1() {
    var answerArea = document.querySelector('.answerArea');
    var mainText = document.querySelector('.textArea');
    answerArea.innerHTML = '<button class="btn btn-success btnNext" onclick="nextStep2()">下一步</button>'
    mainText.innerHTML = '<div class="textTitle">任務說明</div><div class="textFooter2">你的任務是分別評估你到商城時，<br>對於由小艾助理，AI助理，及商城商品這三種商品介紹的方式，<br>分別有甚麼感受。<br>你的答案沒有對或錯，<br>請根據實際的感受來回答問題。謝謝!<br></div>';
}

function nextStep2() {
    var answerArea = document.querySelector('.answerArea');
    var mainText = document.querySelector('.textArea');
    answerArea.innerHTML = '<button class="btn btn-success btnNext" onclick="nextStep3()">下一步</button>'
    mainText.innerHTML = ' <div class="topTitle">三種購物方式的範例</div><div class="examplePic"><img src="pictures/example1.png" class="exampleImg" alt=""></div><div class="examplePic"><img src="pictures/example2.png" class="exampleImg" alt=""></div><div class="examplePic"><img src="pictures/example3.png" class="exampleImg" alt=""></div><div class="clear"></div>';
}
function nextStep3() {
    var answerArea = document.querySelector('.answerArea');
    var mainText = document.querySelector('.textArea');
    answerArea.innerHTML = '<button class="btn btn-success btnNext" onclick="nextStep4()">下一步</button>'
    mainText.innerHTML = '<div class="topTitle">實驗流程</div><div class="stepDescription"><ul class="list-group"><li class="list-group-item">1.注視銀幕的中間十字標記，專心參與實驗 </li><li class="list-group-item">2.介紹購物助理</li><li class="list-group-item">3.購物助理介紹推薦的產品</li><li class="list-group-item">4.針對購物助理回答相關的問題</li><li class="list-group-item">5.購物助理介紹產品及價格</li><li class="list-group-item">6.評估並回答你的購買意願 </li><li class="list-group-item">7.重複步驟1~6，直到完成實驗</li><li class="list-group-item"> ★接著下面就開始實驗</li></ul></div>';
}
function nextStep4() {
    window.location.href = "recommendTest.html"
}
function backToHome() {
    window.location.href = "index.html"
}




//其他會用到的函數
function getRandomList(x) {
    randomList = [];
    tmp_randomList = [];

    for (i = x; i >= 1; i--) {
        tmp_randomList.push(i);
    }
    for (i = x; i >= 1; i--) {
        var random = getRandom(i);
        var tmp = tmp_randomList[random];
        randomList.push(tmp);
        tmp_randomList.splice(random, 1);
    }
    return randomList;
}
function getRandom(x) {
    return Math.floor(Math.random() * x);
};

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};
