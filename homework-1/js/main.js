// 九九乘法表
document.write("<table>");
for (let i = 1; i < 10; i++) {
    document.write("<tr>")
    for (let j = 1; j < 10; j++) {
        // console.log(j + "X" + i + "=" + j * i);
        document.write(`<td>${j}X${i}=${j * i}`);
    }
}


// BMI計算
let heigh = document.getElementById("heigh");
let weight = document.getElementById("weight");
let calculate = document.getElementById("BMI-calculate")
let output = document.getElementById("output");
let BMI = "";

calculate.addEventListener("click", function () {
    let resultHeigh = Number(heigh.value) / 100 * Number(heigh.value) / 100;

    let resultWeight = Number(weight.value);
    let BMI = resultWeight / resultHeigh;
    console.log(BMI);

    if (BMI < 18.5) {
        output.innerHTML = "過輕";
    } else if (BMI >= 18.5 && BMI < 24) {
        output.innerHTML = "正常";
    } else if (BMI >= 24 && BMI < 27) {
        output.innerHTML = "過重";
    } else if (BMI >= 27 && BMI < 30) {
        output.innerHTML = "輕度肥胖";
    } else if (BMI >= 30 && BMI < 35) {
        output.innerHTML = "中度肥胖";
    } else if (BMI >= 35) {
        output.innerHTML = "重度肥胖";
    };
});

// 聖誕樹
function treePaint() {
    let tree = document.getElementById("tree");
    let leaves = parseInt(document.querySelector("#treeWide").value);
    console.log(leaves);
    let trunk = 2;

    let treeWidth = leaves * 2 + 1;
    let treeHeigh = leaves + trunk;

    for (let y = 0; y <= treeHeigh; y++) {
        for (let x = 0; x < treeWidth; x++) {
            // console.log(x);
            // let sapce = "&nbsp;";
            // let leaf = "^";
            // let bar = "*";
            let dot = "";
            dot = "&emsp;";
            // console.log(leaf);

            if (x == leaves) {
                dot = "＾";
            }
            else if (x < leaves && y <= leaves && x >= leaves - y) {
                dot = "＾";

            }
            else if (x > leaves && y <= leaves && x - leaves <= y) {
                dot = "＾";
            }
            tree.innerHTML += dot;
        }
        tree.innerHTML += "<br>";
    }

}



// 輸入西元年，判斷是否是閏年
let yearInput = document.getElementById("year");
let yearCalculate = document.getElementById("year-calculate");
let answerYear = document.getElementById("answer-year");
// let theYear = new Date();
// console.log(theYear);
// let nowYear = theYear.getFullYear();
// console.log(nowYear);
let resultYear = "";
yearCalculate.addEventListener("click", function () {
    let nowYear = Number(yearInput.value)
    if (nowYear % 400 == 0) {
        console.log("閏年");
        answerYear.innerHTML = "閏年";
    } else if (nowYear % 4 == 0 && nowYear % 100 != 0) {
        console.log("閏年");
        answerYear.innerHTML = "閏年";
    } else if (nowYear % 4 != 0) {
        console.log("平年");
        answerYear.innerHTML = "平年";
    } else if (nowYear % 400 != 0 && nowYear % 100 == 0) {
        console.log("平年");
        answerYear.innerHTML = "平年";
    }
});
// guessNum

let number1 = document.getElementById("number1");
let pressNum = document.getElementById("number-calculate");
let ansewr = document.getElementById("ansewr");
let startGame = document.getElementById("startGame");

startGame.addEventListener("click", function () {
    pressNum.disabled = false;
    let num = Math.random()
    let guessNum = Math.floor(num * 100); //取整數
    console.log(guessNum);
    let count = 0;
    let number = 16;
    const t = setInterval(() => {
        pressNum.addEventListener("click", function () {

            let yourNum = Number(number1.value);
            if (yourNum > guessNum) {
                ansewr.innerHTML = "數字太大!"
            } else if (yourNum < guessNum) {
                ansewr.innerHTML = "數字太小!"
            } else if (yourNum == guessNum) {
                ansewr.innerHTML = "恭喜猜中!"
                pressNum.disabled = true;
            }
        })
        number--;
        count++;
        console.log(count);
        timer.innerText = number
        if (count == 16) {
            timer.innerHTML = "時間結束!"
            clearInterval(t);
            pressNum.disabled = true;
        }

    }, 1500);

});

function checkPwd2() {
    let pwdInput2 = document.querySelector("#pwd2").value;
    let pwdLength = pwdInput2.length;
    let str = "輸入正確";

    //字數檢查
    if (pwdLength === 0) {
        str = "請輸入密碼";
    } else if (pwdLength < 6) {
        str = "請輸入六位數";
    }

    let isUppercaseLessOne = false;
    let isLowercaseLessOne = false;
    let isNumberLessOne = false;
    let isSpecialCharLessOne = false;
    for (let i = 0; i < pwdLength; i++) {
        const en = pwdInput2.charCodeAt(i);
        // 大寫英文
        if (en >= 65 && en <= 90) {
            isUppercaseLessOne = true;
            continue;
        }
        // 小寫英文
        if (en >= 97 && en <= 122) {
            isLowercaseLessOne = true;
            continue;
        }
        // 數字
        if (en >= 48 && en <= 57) {
            isNumberLessOne = true;
            continue;
        }
        // 特殊字元（非英文非數字）
        isSpecialCharLessOne = true;
    }
    if (str == true) {
        if (!isUppercaseLessOne) str = "須至少一個大寫英文. ";
        if (!isLowercaseLessOne) str = "須至少一個小寫英文. ";
        if (!isNumberLessOne) str = "須至少一個數字. ";
        if (!isSpecialCharLessOne) str = "須至少一個特殊字元. ";
    }
    document.querySelector(".check-ans2").innerHTML = str;
    console.log(pwdInput2);

}
// 轉溫度
function turnDegree() {
    let celsiusInput = parseInt(document.getElementById("Cdegree").value);
    let fahrenheitInput = parseInt(document.getElementById("Fdegree").value);
    // var resultParagraph = document.getElementById("result");
    let result;

    if (celsiusInput && fahrenheitInput) {
        alert("請只輸入一個溫度值")
    } else if (!celsiusInput && !fahrenheitInput) {
        alert("請輸入溫度值")
    } else if (celsiusInput) {
        //攝氏轉華氏
        let convertedTemperature = (celsiusInput * 9 / 5) + 32;
        result = parseInt(convertedTemperature) + "°F";
        document.getElementById("Cdegree").value = result
    } else {
        //華氏轉攝氏
        var convertedTemperature = (fahrenheitInput - 32) * 5 / 9;
        result = parseInt(convertedTemperature) + "°C";
        document.getElementById("Fdegree").value = result
    }

}

// 計算年齡
function calculateAge() {
    let ageAnswer = document.getElementById("age");
    let theDate = document.getElementById("birthday").value;
    let parts = theDate.split("-");
    // 取生日
    let birthY = parseInt(parts[0]);
    let birthM = parseInt(parts[1]);
    let birthD = parseInt(parts[2]);
    let birthMD = birthM * 100 + birthD;
    // 取今天
    let nowday = new Date();
    let thisY = nowday.getFullYear();
    let thisM = nowday.getMonth() + 1;
    let thisD = nowday.getDate();
    let thisMD = thisM * 100 + thisD;
    // 判斷是否一歲
    let age = "";
    let resultY = thisY - birthY;
    if (thisY >= birthY && thisMD >= birthMD) {
        age = "我今年" + resultY + "歲";
    } else if (thisY <= birthY && thisMD < birthMD) {
        age = "我今年還沒出生唷~";
    } else {
        age = "我今年" + resultY - 1 + "歲";
    }
    ageAnswer.innerHTML = age;
}
// 使用string物件檢查電子郵件中要有 @ . 以及 @ 不能重複
function checkPwd() {
    let pwdInput = document.querySelector("#pwd").value;
    let doubleA = pwdInput.lastIndexOf("@");
    let checkA = pwdInput.indexOf("@");
    let dot = pwdInput.indexOf(".");
    let ckeckAns = ""
    if (checkA < 0) {
        checkAns = "請輸入@"
    } else if (checkA !== doubleA) {
        checkAns = "重複輸入@"
    } else if (dot < 0) {
        checkAns = "請輸入."
    } else {
        checkAns = "輸入正確"
    }
    document.querySelector(".check-ans").innerHTML = checkAns;
}

//  Regex 至少包含一個大寫字母、小寫字母、數字、符號
function validatePassword() {
    let regexInput = document.querySelector("#regex").value;
    let passwordLength = regexInput.length;
    let str = "";
    console.log(regexInput);
    // if (passwordLength < 8) {
    //     console.log("false");
    //     return false;
    // }
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
    if (regex.test(regexInput) === true) {
        str = "輸入正確";
    } else {
        str = "輸入錯誤";
    }
    document.querySelector(".check-regex").innerHTML = str;
}