const conteiner = document.querySelectorAll('.xoro');
const btn = document.querySelector('#btn-reset')
const player = document.querySelector('.player')
const player1 = document.querySelector('.player1')
const victory = document.querySelector('.victory')
const btnRestart = document.getElementById('btn-restart')
function resetBtn(){
    conteiner.forEach((item)=>{
        item.innerHTML = "";
    })
}
function restartBtn(){
    victory.style.zIndex = -1;
    resetBtn();
}



player.classList.add('activePlayer')

function getClick(event){
    let player1Test = player.classList[1] === "activePlayer";
    let checkItem = event.target.innerHTML === "";
    if(checkItem){
        if(player1Test){
            let item = event.target.innerHTML = "X";
            player.classList.remove('activePlayer')
            player1.classList.add('activePlayer')
        }else{
            event.target.innerHTML = "O";
            player1.classList.remove('activePlayer')
            player.classList.add('activePlayer')
        }
    }
    let conteiner0 = conteiner[0].innerHTML
    let conteiner1 = conteiner[1].innerHTML
    let conteiner2 = conteiner[2].innerHTML 
    let conteiner3 = conteiner[3].innerHTML 
    let conteiner4 = conteiner[4].innerHTML 
    let conteiner5 = conteiner[5].innerHTML 
    let conteiner6 = conteiner[6].innerHTML 
    let conteiner7 = conteiner[7].innerHTML
    let conteiner8 = conteiner[8].innerHTML
    if(conteiner0 === "X" && conteiner1 === "X" && conteiner2 === "X" || conteiner3 === "X" && conteiner4 === "X" && conteiner5 === "X" || conteiner6 === "X" && conteiner7 === "X" && conteiner8 === "X" || conteiner0 === "X" && conteiner3 === "X" && conteiner6 === "X" || conteiner1 === "X" && conteiner4 === "X" && conteiner7 === "X" || conteiner2 === "X" && conteiner5 === "X" && conteiner8 === "X" || conteiner0 === "X" && conteiner4 === "X" && conteiner8 === "X" || conteiner2 === "X" && conteiner4 === "X" && conteiner6 === "X"){

        victory.style.zIndex = 1;
        victory.lastElementChild.firstElementChild.lastElementChild.innerHTML = "Player 1"

    }
    if(conteiner0 === "O" && conteiner1 === "O" && conteiner2 === "O" || conteiner3 === "O" && conteiner4 === "O" && conteiner5 === "O" || conteiner6 === "O" && conteiner7 === "O" && conteiner8 === "O" || conteiner0 === "O" && conteiner3 === "O" && conteiner6 === "O" || conteiner1 === "O" && conteiner4 === "O" && conteiner7 === "O" || conteiner2 === "O" && conteiner5 === "O" && conteiner8 === "O" || conteiner0 === "O" && conteiner4 === "O" && conteiner8 === "O" || conteiner2 === "O" && conteiner4 === "O" && conteiner6 === "O"){


        victory.style.zIndex = 1;
        victory.lastElementChild.firstElementChild.lastElementChild.innerHTML = "Player 2"
    }

}

btn.addEventListener("click", resetBtn)
btnRestart.addEventListener("click", restartBtn)
addEventListener("click", getClick)