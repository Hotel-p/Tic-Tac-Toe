const cells = document.querySelectorAll(".grid-item");

let currentVar = 'X'

cells.forEach((cell)=>{
    cell.addEventListener('click',()=>{
        cell.innerHTML = currentVar;
        if(currentVar === 'X'){
            currentVar = 'O';
        }
        else{
            currentVar = 'X';
        }
    })
})

