const sketchPad = document.querySelector('.sketchPad');
let gridSize = 16
let drawColor = 'black';

function makeGrid(gridSize){

    for(i = 0; i < gridSize; i++){
        let newRow = document.createElement('div');
        newRow.classList.add('gridRow');
        sketchPad.appendChild(newRow);
    }
    console.log(sketchPad);
    for(i = 0; i< gridSize; i ++){
        for(j=0; j < gridSize; j++){
        let newBox = document.createElement('div');
        newBox.classList.add('gridBox');
        newBox.addEventListener('mouseover', fill);
        sketchPad.children[i].appendChild(newBox);
        }
    }
}

makeGrid(gridSize);

function fill(e){
    e.target.style.backgroundColor = drawColor;
}