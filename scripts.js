const sketchPad = document.querySelector('.sketchPad');
let gridSize = 16

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
        sketchPad.children[i].appendChild(newBox);
        }
    }
}

makeGrid(30);