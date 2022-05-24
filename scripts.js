
/**
 * Function generates a grid filled with divs
 * Grid is created where the columns and rows are set to num arguement recieved
 * Grid is filled by a for-loop that creats and appends div elements to #grid_container
 * 
 */
function setGridSize(num){
    grid_size = document.getElementById('grid_container');
    grid_size.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    grid_size.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    for(let i = 0; i < (num*num); i++){
        const div = document.createElement('div');

        // div attributes
        div.setAttribute('class',`grid_cell${i+1}`);
        div.style.height = '10px';
        div.style.width = '10px';
        div.style.border = '1px dotted black';
        div.style.margin = '0px';
        div.style.padding = '0px';

        // Event listener that changes div background
        // color to black when the mouse hovers over it
        div.addEventListener('mouseover', function(){
            div.style.backgroundColor = 'black';
        });
        document.getElementById('grid_container').appendChild(div);

    }//END for-loop for creating divs
}//END function setGridSize()





setGridSize(100);
