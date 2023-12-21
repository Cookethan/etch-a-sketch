const sketchPad = document.querySelector('.sketchPad');
const slider = document.querySelector('.sizeSlider');
const sliderValue = document.querySelector('.sliderValue')
const rainbowModeBtn = document.querySelector('.rainbow')
let gridSize = 16
let drawColor = 'black';

function makeGrid(gridSize){

    for(i = 0; i < gridSize; i++){
        // creates gridRow divs to hold gridBoxes
        let newRow = document.createElement('div');
        newRow.classList.add('gridRow');
        sketchPad.appendChild(newRow);
    }

    for(i = 0; i< gridSize; i ++){
        // iterates through grid rows to create and add gridBoxes
        for(j=0; j < gridSize; j++){
        let newBox = document.createElement('div');
        newBox.classList.add('gridBox');
        newBox.addEventListener('mouseover', fill);
        sketchPad.children[i].appendChild(newBox);
        }
    }
}

slider.oninput = (e) =>{ 
    gridSize = e.target.value;
    sliderValue.textContent = `${e.target.value} X ${e.target.value}`
    sketchPad.replaceChildren();
    makeGrid(gridSize)
}

rainbowModeBtn.onclick = (e) =>{
    
    drawColor = `rainbow`
}

function fill(e){
    let randB = Math.floor(Math.random() * 256);
    let randR = Math.floor(Math.random() * 256);
    let randG = Math.floor(Math.random() * 256);
    if(drawColor == 'rainbow'){
        e.target.style.backgroundColor = `rgb(${randR}, ${randG}, ${randB})`
    }else{
    e.target.style.backgroundColor = drawColor;
    }
}

window.onload =  () =>{
    makeGrid(gridSize);
}