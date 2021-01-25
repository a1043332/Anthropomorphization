function sendSheet() {
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwfA3JR9FXgftsdqheKGGXGc1iCnJ7s1UlFDNP7b6n_HJTWL2Bcr8yhQA/exec",
        data: {
            "say1": btn1Count,
            "say2": btn2Count,
            "say3": btn3Count,
            "say4": btn4Count,
            "say5": btn5Count,
            "say6": btn6Count
        },
        success: function (response) {
            if (response == "success") {
                btn1Count = 0, btn2Count = 0, btn3Count = 0, btn4Count = 0, btn5Count = 0, btn6Count = 0;
                console.log('感謝您')
            }
        },
    });
};

// function send() {
//     var oReq = new XMLHttpRequest();
//     oReq.open("GET", "https://script.google.com/macros/s/AKfycbwfA3JR9FXgftsdqheKGGXGc1iCnJ7s1UlFDNP7b6n_HJTWL2Bcr8yhQA/exec");
//     oReq.send();
// }
