function sendSheet() {
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwfA3JR9FXgftsdqheKGGXGc1iCnJ7s1UlFDNP7b6n_HJTWL2Bcr8yhQA/exec",
        data: {
            "time": Date.now(),
            "iPng1": localStorage.getItem('iPng1'),
            "iPng2": localStorage.getItem('iPng2'),
            "iPng3": localStorage.getItem('iPng3'),
            "iPng4": localStorage.getItem('iPng4'),
            "iPng5": localStorage.getItem('iPng5'),
            "iPng6": localStorage.getItem('iPng6'),
            "iPng7": localStorage.getItem('iPng7'),

            "iAns1": localStorage.getItem('iAns1'),
            "iAns2": localStorage.getItem('iAns2'),
            "iAns3": localStorage.getItem('iAns3'),
            "iAns4": localStorage.getItem('iAns4'),
            "iAns5": localStorage.getItem('iAns5'),
            "iAns6": localStorage.getItem('iAns6'),
            "iAns7": localStorage.getItem('iAns7'),

            "aiPng1": localStorage.getItem('aiPng1'),
            "aiPng2": localStorage.getItem('aiPng2'),
            "aiPng3": localStorage.getItem('aiPng3'),
            "aiPng4": localStorage.getItem('aiPng4'),
            "aiPng5": localStorage.getItem('aiPng5'),
            "aiPng6": localStorage.getItem('aiPng6'),
            "aiPng7": localStorage.getItem('aiPng7'),

            "aiAns1": localStorage.getItem('aiAns1'),
            "aiAns2": localStorage.getItem('aiAns2'),
            "aiAns3": localStorage.getItem('aiAns3'),
            "aiAns4": localStorage.getItem('aiAns4'),
            "aiAns5": localStorage.getItem('aiAns5'),
            "aiAns6": localStorage.getItem('aiAns6'),
            "aiAns7": localStorage.getItem('aiAns7'),

            "shinPng1": localStorage.getItem('shinPng1'),
            "shinPng2": localStorage.getItem('shinPng2'),
            "shinPng3": localStorage.getItem('shinPng3'),
            "shinPng4": localStorage.getItem('shinPng4'),
            "shinPng5": localStorage.getItem('shinPng5'),
            "shinPng6": localStorage.getItem('shinPng6'),
            "shinPng7": localStorage.getItem('shinPng7'),

            "shinAns1": localStorage.getItem('shinAns1'),
            "shinAns2": localStorage.getItem('shinAns2'),
            "shinAns3": localStorage.getItem('shinAns3'),
            "shinAns4": localStorage.getItem('shinAns4'),
            "shinAns5": localStorage.getItem('shinAns5'),
            "shinAns6": localStorage.getItem('shinAns6'),
            "shinAns7": localStorage.getItem('shinAns7')
        },
        success: function (response) {
            if (response == "success") {
                btn1Count = 0, btn2Count = 0, btn3Count = 0, btn4Count = 0, btn5Count = 0, btn6Count = 0;
                console.log('感謝您')
              //  localStorage.clear();
            }
        },
    });
};

// function send() {
//     var oReq = new XMLHttpRequest();
//     oReq.open("GET", "https://script.google.com/macros/s/AKfycbwfA3JR9FXgftsdqheKGGXGc1iCnJ7s1UlFDNP7b6n_HJTWL2Bcr8yhQA/exec");
//     oReq.send();
// }
