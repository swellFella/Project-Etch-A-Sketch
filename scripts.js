const grid_size = document.getElementById('grid_container');
const initial_grid_size = 4;
const slider = document.getElementById('myRange');
const output = document.getElementById('slider_value');
output.textContent = slider.value;
slider.onchange = function(){
    output.textContent = this.value;
    setGridSize(this.value);
}

/**
 * Function generates a grid filled with divs
 * Grid is created where the columns and rows are set to num arguement recieved
 * Grid is filled by a for-loop that creats and appends div elements to #grid_container
 * 
 * When function is called the innerHTML of the grid_container is erased
 * 
 */
function setGridSize(num){
    // Clear innerHTML when the grid size is changed
    grid_size.innerHTML = '';
    grid_size.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    grid_size.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    for(let i = 0; i < (num*num); i++){
        const div = document.createElement('div');
        div.setAttribute('class',`grid_cell_blank`);

        // Event listener that adds CSS class black_cell
        // to grid cell when mouse passes over it
        div.addEventListener('mouseover', () =>{
            div.className += ' black_cell';
        });
        document.getElementById('grid_container').appendChild(div);
    }//END for-loop for creating divs
}//END function setGridSize()

setGridSize(initial_grid_size);
