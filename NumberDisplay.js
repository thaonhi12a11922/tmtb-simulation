function drawLine(x, y, xt, yt){
    var displayArea = document.getElementById("myCanvas");
    var ctx = displayArea.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(xt, yt);
    ctx.stroke();
}

const generateRandomArray = (max) => {
    const rands = [];
    while (rands.length < 24){
        const a = Math.round(Math.random()*max);
        if ((a > 100) && (rands.indexOf(a) === -1)){
            rands.push(a);
        }
    }
    return rands;
}

function displayButton(){
    var ax_num = [562, 810, 442, 100, 943, 119, 751, 743, 585, 195, 40, 0, 150, 0, -1, -180, -1050, -250, 189, 611, 26, 800, 79, 50];
    var ay_num = [210, 236, 125, 286, 234, 377, 61, 428, 266, 57, 250, 438, 0, 0, 192, 117, 35, 307, 115, 16, 320, 361, 97, 0];
    console.log(ax_num);
    console.log(ay_num);

    let button1 = document.getElementById("btn1");
    let button2 = document.getElementById("btn2");
    let button3 = document.getElementById("btn3");
    let button4 = document.getElementById("btn4");
    let button5 = document.getElementById("btn5");
    let button6 = document.getElementById("btn6");
    let button7 = document.getElementById("btn7");
    let button8 = document.getElementById("btn8");
    let button9 = document.getElementById("btn9");
    let button10 = document.getElementById("btn10");
    let button11 = document.getElementById("btn11");
    let button12 = document.getElementById("btn12");
    let buttonA = document.getElementById("btnA");
    let buttonB = document.getElementById("btnB");
    let buttonC = document.getElementById("btnC");
    let buttonD = document.getElementById("btnD");
    let buttonE = document.getElementById("btnE");
    let buttonF = document.getElementById("btnF");
    let buttonG = document.getElementById("btnG");
    let buttonH = document.getElementById("btnH");
    let buttonI = document.getElementById("btnI");
    let buttonJ = document.getElementById("btnJ");
    let buttonK = document.getElementById("btnK");
    let buttonL = document.getElementById("btnL");

    let randWidth1 = ax_num[0] + "px";
    let randHeight1 = ay_num[0] + "px";

    let randWidth2 = ax_num[1] + "px";
    let randHeight2 = ay_num[1] + "px";

    let randWidth3 = ax_num[2] + "px";
    let randHeight3 = ay_num[2] + "px";

    let randWidth4 = ax_num[3] + "px";
    let randHeight4 = ay_num[3] + "px";

    let randWidth5 = ax_num[4] + "px";
    let randHeight5 = ay_num[4] + "px";

    let randWidth6 = ax_num[5] + "px";
    let randHeight6 = ay_num[5] + "px";

    let randWidth7 = ax_num[6] + "px";
    let randHeight7 = ay_num[6] + "px";

    let randWidth8 = ax_num[7] + "px";
    let randHeight8 = ay_num[7] + "px";

    let randWidth9 = ax_num[8] + "px";
    let randHeight9 = ay_num[8] + "px";

    let randWidth10 = ax_num[9] + "px";
    let randHeight10 = ay_num[9] + "px";

    let randWidth11 = ax_num[10] + "px";
    let randHeight11 = ay_num[10] + "px";

    let randWidth12 = ax_num[11] + "px";
    let randHeight12 = ay_num[11] + "px";

    let randWidthA = ax_num[12] + "px";
    let randHeightA = ay_num[12] + "px";

    let randWidthB = ax_num[13] + "px";
    let randHeightB = ay_num[13] + "px";

    let randWidthC = ax_num[14] + "px";
    let randHeightC = ay_num[14] + "px";

    let randWidthD = ax_num[15] + "px";
    let randHeightD = ay_num[15] + "px";

    let randWidthE = ax_num[16] + "px";
    let randHeightE = ay_num[16] + "px";

    let randWidthF = ax_num[17] + "px";
    let randHeightF = ay_num[17] + "px";

    let randWidthG = ax_num[18] + "px";
    let randHeightG = ay_num[18] + "px";

    let randWidthH = ax_num[19] + "px";
    let randHeightH = ay_num[19] + "px";

    let randWidthI = ax_num[20] + "px";
    let randHeightI = ay_num[20] + "px";

    let randWidthJ = ax_num[21] + "px";
    let randHeightJ = ay_num[21] + "px";

    let randWidthK = ax_num[22] + "px";
    let randHeightK = ay_num[22] + "px";

    let randWidthL = ax_num[23] + "px";
    let randHeightL = ay_num[23] + "px";

    button1.style.position = "relative";
    button1.style.visibility = "visible";
    button1.style.left = randWidth1;
    button1.style.top = randHeight1;

    button2.style.position = "relative";
    button2.style.visibility = "visible";
    button2.style.left = randWidth2;
    button2.style.top = randHeight2;

    button3.style.position = "relative";
    button3.style.visibility = "visible";
    button3.style.left = randWidth3;
    button3.style.top = randHeight3;

    button4.style.position = "relative";
    button4.style.visibility = "visible";
    button4.style.left = randWidth4;
    button4.style.top = randHeight4;

    button5.style.position = "relative";
    button5.style.visibility = "visible";
    button5.style.left = randWidth5;
    button5.style.top = randHeight5;

    button6.style.position = "relative";
    button6.style.visibility = "visible";
    button6.style.left = randWidth6;
    button6.style.top = randHeight6;

    button7.style.position = "relative";
    button7.style.visibility = "visible";
    button7.style.left = randWidth7;
    button7.style.top = randHeight7;

    button8.style.position = "relative";
    button8.style.visibility = "visible";
    button8.style.left = randWidth8;
    button8.style.top = randHeight8;

    button9.style.position = "relative";
    button9.style.visibility = "visible";
    button9.style.left = randWidth9;
    button9.style.top = randHeight9;

    button10.style.position = "relative";
    button10.style.visibility = "visible";
    button10.style.left = randWidth10;
    button10.style.top = randHeight10;

    button11.style.position = "relative";
    button11.style.visibility = "visible";
    button11.style.left = randWidth11;
    button11.style.top = randHeight11;

    button12.style.position = "relative";
    button12.style.visibility = "visible";
    button12.style.left = randWidth12;
    button12.style.top = randHeight12;

    buttonA.style.position = "relative";
    buttonA.style.visibility = "visible";
    buttonA.style.left = randWidthA;
    buttonA.style.top = randHeightA;

    buttonB.style.position = "relative";
    buttonB.style.visibility = "visible";
    buttonB.style.left = randWidthB;
    buttonB.style.top = randHeightB;

    buttonC.style.position = "relative";
    buttonC.style.visibility = "visible";
    buttonC.style.left = randWidthC;
    buttonC.style.top = randHeightC;

    buttonD.style.position = "relative";
    buttonD.style.visibility = "visible";
    buttonD.style.left = randWidthD;
    buttonD.style.top = randHeightD;

    buttonE.style.position = "relative";
    buttonE.style.visibility = "visible";
    buttonE.style.left = randWidthE;
    buttonE.style.top = randHeightE;

    buttonF.style.position = "relative";
    buttonF.style.visibility = "visible";
    buttonF.style.left = randWidthF;
    buttonF.style.top = randHeightF;

    buttonG.style.position = "relative";
    buttonG.style.visibility = "visible";
    buttonG.style.left = randWidthG;
    buttonG.style.top = randHeightG;

    buttonH.style.position = "relative";
    buttonH.style.visibility = "visible";
    buttonH.style.left = randWidthH;
    buttonH.style.top = randHeightH;

    buttonI.style.position = "relative";
    buttonI.style.visibility = "visible";
    buttonI.style.left = randWidthI;
    buttonI.style.top = randHeightI;

    buttonJ.style.position = "relative";
    buttonJ.style.visibility = "visible";
    buttonJ.style.left = randWidthJ;
    buttonJ.style.top = randHeightJ;

    buttonK.style.position = "relative";
    buttonK.style.visibility = "visible";
    buttonK.style.left = randWidthK;
    buttonK.style.top = randHeightK;

    buttonL.style.position = "relative";
    buttonL.style.visibility = "visible";
    buttonL.style.left = randWidthL;
    buttonL.style.top = randHeightL;
    
    var startGame = false;
    var parent = [0];

    button1.addEventListener("click", function(){
        if (startGame && !button1.disable){
            alert("Mismatch! Let's choose again!");
        } else {
            startGame = true;
            button1.disable = true;
            document.getElementById("btn1").style.backgroundColor = '#7CFC00';
            parent.push(1);
        }
    })

    buttonA.addEventListener("click", function(){
        if (!startGame){
            alert("Mismatch! Let's choose again!");
        } else {
            if (button1.disable) {
                buttonA.disable = true;
                document.getElementById("btnA").style.backgroundColor = '#7CFC00';
            } else {
                alert("Mismatch! Let's choose again!");
            }
        }
    })

    button2.addEventListener("click", function(){
        if (!startGame){
            alert("Mismatch! Let's choose again!");
        } else {
            if (buttonA.disable) {
                button2.disable = true;
                document.getElementById("btn2").style.backgroundColor = '#7CFC00';
            } else {
                alert("Mismatch! Let's choose again!");
            }
        }
    })

    buttonB.addEventListener("click", function(){
        if (!startGame){
            alert("Mismatch! Let's choose again!");
        } else {
            if (button2.disable) {
                buttonB.disable = true;
                document.getElementById("btnB").style.backgroundColor = '#7CFC00';
            } else {
                alert("Mismatch! Let's choose again!");
            }
        }
    })

    button3.addEventListener("click", function(){
        if (!startGame){
            alert("Mismatch! Let's choose again!");
        } else {
            if (buttonB.disable) {
                button3.disable = true;
                document.getElementById("btn3").style.backgroundColor = '#7CFC00';
            } else {
                alert("Mismatch! Let's choose again!");
            }
        }
    })

    buttonC.addEventListener("click", function(){
        if (!startGame){
            alert("Mismatch! Let's choose again!");
        } else {
            if (button3.disable) {
                buttonC.disable = true;
                document.getElementById("btnC").style.backgroundColor = '#7CFC00';
            } else {
                alert("Mismatch! Let's choose again!");
            }
        }
    })

    button4.addEventListener("click", function(){
        if (!startGame){
            alert("Mismatch! Let's choose again!");
        } else {
            if (buttonC.disable) {
                button4.disable = true;
                document.getElementById("btn4").style.backgroundColor = '#7CFC00';
            } else {
                alert("Mismatch! Let's choose again!");
            }
        }
    })

    buttonD.addEventListener("click", function(){
        if (!startGame){
            alert("Mismatch! Let's choose again!");
        } else {
            if (button4.disable) {
                buttonD.disable = true;
                document.getElementById("btnD").style.backgroundColor = '#7CFC00';
            } else {
                alert("Mismatch! Let's choose again!");
            }
        }
    })

    button5.addEventListener("click", function(){
        if (!startGame){
            alert("Mismatch! Let's choose again!");
        } else {
            if (buttonD.disable) {
                button5.disable = true;
                document.getElementById("btn5").style.backgroundColor = '#7CFC00';
            } else {
                alert("Mismatch! Let's choose again!");
            }
        }
    })

    buttonE.addEventListener("click", function(){
        if (!startGame){
            alert("Mismatch! Let's choose again!");
        } else {
            if (button5.disable) {
                buttonE.disable = true;
                document.getElementById("btnE").style.backgroundColor = '#7CFC00';
            } else {
                alert("Mismatch! Let's choose again!");
            }
        }
    })

    button6.addEventListener("click", function(){
        if (!startGame){
            alert("Mismatch! Let's choose again!");
        } else {
            if (buttonE.disable) {
                button6.disable = true;
                document.getElementById("btn6").style.backgroundColor = '#7CFC00';
            } else {
                alert("Mismatch! Let's choose again!");
            }
        }
    })

    buttonF.addEventListener("click", function(){
        if (!startGame){
            alert("Mismatch! Let's choose again!");
        } else {
            if (button6.disable) {
                buttonF.disable = true;
                document.getElementById("btnF").style.backgroundColor = '#7CFC00';
            } else {
                alert("Mismatch! Let's choose again!");
            }
        }
    })

    button7.addEventListener("click", function(){
        if (!startGame){
            alert("Mismatch! Let's choose again!");
        } else {
            if (buttonF.disable) {
                button7.disable = true;
                document.getElementById("btn7").style.backgroundColor = '#7CFC00';
            } else {
                alert("Mismatch! Let's choose again!");
            }
        }
    })

    buttonG.addEventListener("click", function(){
        if (!startGame){
            alert("Mismatch! Let's choose again!");
        } else {
            if (button7.disable) {
                buttonG.disable = true;
                document.getElementById("btnG").style.backgroundColor = '#7CFC00';
            } else {
                alert("Mismatch! Let's choose again!");
            }
        }
    })

    button8.addEventListener("click", function(){
        if (!startGame){
            alert("Mismatch! Let's choose again!");
        } else {
            if (buttonG.disable) {
                button8.disable = true;
                document.getElementById("btn8").style.backgroundColor = '#7CFC00';
            } else {
                alert("Mismatch! Let's choose again!");
            }
        }
    })

    buttonH.addEventListener("click", function(){
        if (!startGame){
            alert("Mismatch! Let's choose again!");
        } else {
            if (button8.disable) {
                buttonH.disable = true;
                document.getElementById("btnH").style.backgroundColor = '#7CFC00';
            } else {
                alert("Mismatch! Let's choose again!");
            }
        }
    })

    button9.addEventListener("click", function(){
        if (!startGame){
            alert("Mismatch! Let's choose again!");
        } else {
            if (buttonH.disable) {
                button9.disable = true;
                document.getElementById("btn9").style.backgroundColor = '#7CFC00';
            } else {
                alert("Mismatch! Let's choose again!");
            }
        }
    })

    buttonI.addEventListener("click", function(){
        if (!startGame){
            alert("Mismatch! Let's choose again!");
        } else {
            if (button9.disable) {
                buttonI.disable = true;
                document.getElementById("btnI").style.backgroundColor = '#7CFC00';
            } else {
                alert("Mismatch! Let's choose again!");
            }
        }
    })

    button10.addEventListener("click", function(){
        if (!startGame){
            alert("Mismatch! Let's choose again!");
        } else {
            if (buttonI.disable) {
                button10.disable = true;
                document.getElementById("btn10").style.backgroundColor = '#7CFC00';
            } else {
                alert("Mismatch! Let's choose again!");
            }
        }
    })

    buttonJ.addEventListener("click", function(){
        if (!startGame){
            alert("Mismatch! Let's choose again!");
        } else {
            if (button10.disable) {
                buttonJ.disable = true;
                document.getElementById("btnJ").style.backgroundColor = '#7CFC00';
            } else {
                alert("Mismatch! Let's choose again!");
            }
        }
    })

    button11.addEventListener("click", function(){
        if (!startGame){
            alert("Mismatch! Let's choose again!");
        } else {
            if (buttonJ.disable) {
                button11.disable = true;
                document.getElementById("btn11").style.backgroundColor = '#7CFC00';
            } else {
                alert("Mismatch! Let's choose again!");
            }
        }
    })

    buttonK.addEventListener("click", function(){
        if (!startGame){
            alert("Mismatch! Let's choose again!");
        } else {
            if (button11.disable) {
                buttonK.disable = true;
                document.getElementById("btnK").style.backgroundColor = '#7CFC00';
            } else {
                alert("Mismatch! Let's choose again!");
            }
        }
    })

    button12.addEventListener("click", function(){
        if (!startGame){
            alert("Mismatch! Let's choose again!");
        } else {
            if (buttonK.disable) {
                button12.disable = true;
                document.getElementById("btn12").style.backgroundColor = '#7CFC00';
            } else {
                alert("Mismatch! Let's choose again!");
            }
        }
    })

    buttonL.addEventListener("click", function(){
        if (!startGame){
            alert("Mismatch! Let's choose again!");
        } else {
            if (button12.disable) {
                buttonL.disable = true;
                document.getElementById("btnL").style.backgroundColor = '#7CFC00';
            } else {
                alert("Mismatch! Let's choose again!");
            }
        }
    })

    if (buttonL.disable) {return true;}
}

 function displayElem(){
//     const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//     const letterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];

//     // The array ax contains the x-coordinate of the number. Its max value is 1230
//     // so that the number is displayed in the frame. The same thing for ay.
//     ax = generateRandomArray(1230);
//     ay = generateRandomArray(480);

//     count = 0;
//     var numberChildNode = [];
//     var letterChildNode = [];
//     var imgnumberChildNode = [];
//     var imgletterChildNode = [];
//     while (count < 12){

//         var num = numArray[count];
//         var left_pos = ax[count];
//         var top_pos = ay[count];

//         //Number display
//         var elemNum = document.createElement("div");
//         elemNum.textContent = num;
//         elemNum.style.position = "absolute";
//         elemNum.style.left = left_pos + "px";
//         elemNum.style.top = top_pos + "px";
//         var temp1 = document.getElementById("mainDiv").appendChild(elemNum);
//         numberChildNode.push(temp1);

//         var imgNum = document.createElement("img");
//         imgNum.setAttribute("src", "E:/FUV/SI/P/TMT-B/Circle.png");
//         imgNum.style.position = "absolute";
//         imgNum.style.left = (left_pos - 16) + "px";
//         imgNum.style.top = (top_pos - 8) + "px";
//         var temp2 = document.getElementById("mainDiv").appendChild(imgNum);
//         imgnumberChildNode.push(temp2);

//         //Letter display
//         var letter = letterArray[count];
//         var left_pos = ax[count + 12];
//         var top_pos = ay[count + 12];
//         var elemLetter = document.createElement("div");
//         elemLetter.textContent = letter;
//         elemLetter.style.position = "absolute";
//         elemLetter.style.left = left_pos + "px";
//         elemLetter.style.top = top_pos + "px";
//         var temp3 = document.getElementById("mainDiv").appendChild(elemLetter);
//         letterChildNode.push(temp3);

//         var imgLetter = document.createElement("img");
//         imgLetter.setAttribute("src", "E:/FUV/SI/P/TMT-B/Circle.png");
//         imgLetter.style.position = "absolute";
//         imgLetter.style.left = (left_pos - 15) + "px";
//         imgLetter.style.top = (top_pos - 8) + "px";
//         var temp4 = document.getElementById("mainDiv").appendChild(imgLetter);
//         imgletterChildNode.push(temp4);

//         count = count + 1;
//     }
}

function myStopWatch(){

    var seconds = 0;
    var minutes = 0;
    var appendMin = document.getElementById("minutes");
    var appendSec = document.getElementById("seconds");
    var btn = document.getElementById("click_btn");
    var interval;

    btn.onclick = function(){
        clearInterval(interval);
        seconds = "00";
        minutes = "00";
        appendMin.innerHTML = minutes;
        appendSec.innerHTML = seconds;
        interval = setInterval(startTimer, 1000);
    }
    var gameResult = displayButton();

    var btnL = document.getElementById("btnL");
    btnL.onclick = function(){
        alert("Success! Please screenshot the screen and send it to your supervisor.");

        if (gameResult) {
            clearInterval();
        }
    }

    function startTimer(){
        seconds++;

        if (seconds <= 9){
            appendSec.innerHTML = "0" + seconds;
        }

        if (seconds > 9){
            appendSec.innerHTML = seconds;
        }

        if(seconds > 59){
            seconds = 0;
            appendSec.innerHTML = "0" + seconds
            minutes++;
            if (minutes > 9){
                appendMin.innerHTML = minutes;
            } else {
                appendMin.innerHTML = "0" + minutes;
            }
        }
    }

}

function myFunction(){
    // var btn = document.getElementById("click_btn");
    // btn.addEventListener("click", function(){
    //     document.getElementById("mainDiv").innerHTML = "";
    //     displayButton();
    // })
}

function getMouseCoordinate(E){
    var x = E.clientX;
    var y = E.clientY;
    var coor = "Coordinate: (" + x + ", " + y + ")";
    document.getElementById("demo").innerHTML = coor;
}

function clearScreen(){
    document.getElementById("demo").innerHTML = "";
}
function clearDiv(){
    document.getElementById("mainDiv").innerHTML = "";
}