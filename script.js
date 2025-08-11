
const container = document.querySelector(".container")

for (let i=0;i<16;i++){
    for (let j=0;j<16;j++){
        let div = document.createElement("div")
        div.addEventListener("mouseover", (event) => {
            div.style.background = "green";
        })
        div.style.width = String(400/16)+'px'
        div.style.height =String(400/16)+'px'
        div.style.background = "aquamarine"
        div.style.margin = "1px"
        container.appendChild(div)
    }
}

