let turnsound = new Audio("turn.mp3");
var turn = "X";
var gameovercheck = 0;
function turnchange() {
    return turn === "X" ? "O" : "X";
}

//win checker..
function checkwin() {
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],

    ]
    boxtexts = document.querySelectorAll(".boxtext");
    boxtextsparent = document.querySelectorAll(".box");
    for (let j = 0; j < wins.length; j++) {
        x = wins[j][0];
        y = wins[j][1];
        z = wins[j][2];
        if ((boxtexts[x].innerText == boxtexts[y].innerText) && (boxtexts[y].innerText == boxtexts[z].innerText) && (boxtexts[x].innerText != "")) {
            boxtextsparent[x].style.backgroundColor = "#6f7070";
            boxtextsparent[y].style.backgroundColor = "#6f7070";
            boxtextsparent[z].style.backgroundColor = "#6f7070";
            //    document.body.style.backgroundColor="pink";
            gameovercheck = 1;
            document.querySelector(".info").innerText = "Player " + turn + " WON";
            document.getElementById("message").innerText = "Click Reset for new Game";

        }
    }
}

//game logic


a = document.getElementsByClassName("box");
var i = 0;
for (i = 0; i < a.length; i++) {
    let Boxtext = a[i].querySelector(".boxtext");
    a[i].addEventListener("click", ()=> {
        if (Boxtext.innerText === '') {
            if (gameovercheck == 0) {
                turnsound.play();
                Boxtext.innerText = turn;
                checkwin();
                if (gameovercheck == 0) {
                    var c = 0;
                    boxtexts = document.querySelectorAll(".boxtext");
                    for(var i=0;i<boxtexts.length;i++){
                        if(boxtexts[i].innerText==""){
                            c=1;
                            break;
                        }


                    }
                    if (c==1) {
                        turn = turnchange();
                        document.querySelector(".info").innerText = "Turn for Player " + turn;

                    }
                    else {
                        document.querySelector(".info").innerText = "Match Draw ";
                        document.getElementById("message").innerText = "Click Reset for new Game";
                    }

                }
            }
        }
})
}