
/**
 * Function that takes a number num and generates a grid size numXnum
 * the grid then is filled with divs using a for-loop
 */
function setGridSize(num){
    // creates a variable called grid_size that points to the element with ID grid_container
    grid_size = document.getElementById('grid_container');
    // alters grid_container style attributes and set the number of repeated rows to function arg
    grid_size.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    grid_size.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    // After grid is created, for-loop fills area of grid with divs
    for(let i = 0; i < (num*num); i++){
        const div = document.createElement('div');
        
        div.style.height = '10px';
        div.style.width = '10px';
        div.style.border = '1px dotted black';
        div.style.margin = '0px';
        div.style.padding = '0px';

        document.getElementById('grid_container').appendChild(div);        
    }


}

setGridSize(20);
