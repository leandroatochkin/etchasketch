
document.addEventListener("DOMContentLoaded", function() {
    console.log("Page loaded")
    createSquares(16,16);
    hoverEffect();
    
});



const container = document.querySelector("#container")
const footer = document.querySelector("#footer")
const newBoardButton = document.querySelector("#new-board")

let footerText = document.createElement("h3")
footer.appendChild(footerText)
footerText.textContent = ''



function createSquares(sideA,sideB){
    container.innerHTML = "";
    for(let i = 0; i < sideA; i++){
        let row = document.createElement("div")
        row.setAttribute("class", "row")
        container.appendChild(row)
            for (let x = 0; x < sideB; x++){
                let square = document.createElement("div")
                square.setAttribute("class", "square")
                row.appendChild(square)  
            }
        }
        
}

function hoverEffect() {
    const squares = document.querySelectorAll(".square");

    squares.forEach(square => {
        square.addEventListener("mouseover", function() {
            square.classList.add("hovered");
        });
    });
}

newBoardButton.addEventListener("click", ()=>{
    let newSideA = prompt("Please enter the heigth of the new board", '')
    console.log(newSideA)
    let newSideB = prompt("Please enter the length of the new board", '')
    console.log(newSideB)
    if(newSideA < 100 && newSideB < 100){
    createSquares(newSideA, newSideB)
    hoverEffect()
    } else (
        alert("The board must be smaller than 100X100")
    )
    footer.textContent = newSideA+'X'+newSideB
})
