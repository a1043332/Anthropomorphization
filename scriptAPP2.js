function sendSheet2() {
    $.ajax({
        url: "https://script.google.com/a/macros/mail.nuk.edu.tw/s/AKfycbzUEuJwnf8Yi8FCg-FCjeL_-KcvbAtINgB_uRDNQkM3-smZ7qoFYMbl5Q/exec",
       
        data: {
            "a": "rrr",
            "b": "localStorage.getItem('shinAns6')",
            "c": "localStorage.getItem('shinAns7')"
        },
        success: function (response) {
            if (response == "success") {
                btn1Count = 0, btn2Count = 0, btn3Count = 0, btn4Count = 0, btn5Count = 0, btn6Count = 0;
                console.log('感謝您')
                localStorage.clear();
            }
        },
    });
};

// function send() {
//     var oReq = new XMLHttpRequest();
//     oReq.open("GET", "https://script.google.com/macros/s/AKfycbwfA3JR9FXgftsdqheKGGXGc1iCnJ7s1UlFDNP7b6n_HJTWL2Bcr8yhQA/exec");
//     oReq.send();
// }
