var questionsNum = 5;
var picturesList = getRandomList(questionsNum);
var questionsCount = 0;
var yesCount = 0;
var noCount = 0;

function start() {
    questionsCount++;
    $(".btnYes").show();
    $(".btnNo").show();
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


function nextStep1(){
    var answerArea = document.querySelector('.answerArea');
    var mainText = document.querySelector('.textArea');
    answerArea.innerHTML = '<button class="btn btn-success btnNext" onclick="nextStep2()">下一步</button>'
    mainText.innerHTML = ' <div class="topTitle">三種購物方式的範例</div><div class="examplePic"><img src="pictures/example1.png" class="exampleImg" alt=""></div><div class="examplePic"><img src="pictures/example2.png" class="exampleImg" alt=""></div><div class="examplePic"><img src="pictures/example3.png" class="exampleImg" alt=""></div><div class="clear"></div>';

}
function nextStep2(){
    var answerArea = document.querySelector('.answerArea');
    var mainText = document.querySelector('.textArea');
    answerArea.innerHTML = '<button class="btn btn-success btnNext" onclick="nextStep3()">下一步</button>'
    mainText.innerHTML = '<div class="topTitle">實驗流程</div><div class="stepDescription"><ul class="list-group"><li class="list-group-item">注視銀幕的中間十字標記，專心參與實驗 </li><li class="list-group-item">介紹購物助理</li><li class="list-group-item">購物助理介紹推薦的產品</li><li class="list-group-item">針對購物助理回答相關的問題</li><li class="list-group-item">購物助理介紹產品及價格</li><li class="list-group-item">評估並回答你的購買意願 </li><li class="list-group-item">重複以上步驟，直到完成實驗</li><li class="list-group-item">接著下面就開始實驗</li></ul></div>';

}
function nextStep3(){
    window.location.href="recommendTest.html"
}

function backToHome(){
    window.location.href="index.html"
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