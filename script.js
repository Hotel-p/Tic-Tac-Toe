const cells = document.querySelectorAll(".grid-item");

let currentVar = 'X'

cells.forEach((cell)=>{
    cell.addEventListener('click',()=>{
        cell.innerHTML = currentVar;
        
        if(currentVar === 'X'){
            cell.setAttribute('style', 'background-color:red; border: 4px solid white');
            currentVar = 'O';
        }
        else{
            currentVar = 'X';
            cell.setAttribute('style', 'background-color:green; border: 4px solid white');
        }
    })
})

