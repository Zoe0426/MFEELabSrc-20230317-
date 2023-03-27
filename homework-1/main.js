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
let tree = document.getElementById("tree");
let leaves = 7;
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

