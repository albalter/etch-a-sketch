
document.getElementById("resetBoard").onclick = function () {
        resetBoard() 
        let cellsWide = prompt("How many cells would you like to have on the board? (Please enter a number not greater than 100)")
        cellsWide = cellsWide > 100 ? 100 : cellsWide
        createBoard(cellsWide)
     };

function resetBoard() { 
    let container = document.querySelector(".container")
    container.innerHTML = ""
}

function createBoard(cellsWide){

let container = document.querySelector(".container")
for (let i=0;i<cellsWide;i++){
    for (let j=0;j<cellsWide;j++){
        let div = document.createElement("div")
        div.addEventListener("mouseover", (event) => {
            div.style.opacity = String(Number(div.style.opacity) + 0.1);
        })
        div.style.width = String(600/cellsWide)+'px'
        div.style.height =String(600/cellsWide)+'px'
        div.style.opacity = 0.2;
        div.style.background = "aquamarine"
        div.style.margin = "1px"
        container.appendChild(div)
    }
}

}

