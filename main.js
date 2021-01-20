var questionsNum = 5;
var picturesList = getRandomList(questionsNum);
var questionsCount = 0;
var yesCount = 0;
var yesCount = 0;

function start() {
    questionsCount++;
    $(".btnYes").show();
    $(".btnNo").show();
    var mainPicture = document.querySelector('.pictureArea');
    mainPicture.innerHTML = '<img src="pictures/main' + picturesList[questionsCount - 1] + '.png" class="mainPicture" alt=""> ';
}
function sayYes() {
    questionsCount++;
    var mainPicture = document.querySelector('.pictureArea');
    if (questionsCount <= questionsNum) {
        mainPicture.innerHTML = '<img src="pictures/main' + picturesList[questionsCount - 1] + '.png" class="mainPicture" alt=""> ';
    }
    else {
        mainPicture.innerHTML = '<div class="thankYou">謝謝您的幫忙~</div>';
        $(".btnYes").hide();
        $(".btnNo").hide();
    }

}
function sayNo() {
    questionsCount++;
    var mainPicture = document.querySelector('.pictureArea');
    if (questionsCount <= questionsNum) {
        mainPicture.innerHTML = '<img src="pictures/main' + picturesList[questionsCount - 1] + '.png" class="mainPicture" alt=""> ';
    }
    else {
        mainPicture.innerHTML = '<div class="thankYou">謝謝您的幫忙~</div>';
        $(".btnYes").hide();
        $(".btnNo").hide();
    }
}

function getRandom(x) {
    return Math.floor(Math.random() * x);
};

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
