const grid_container = document.getElementById('#grid_container');


/**
 * function that creates recieves a number and makes that many divs
 * divs are appended to grid_container as a child element.
 */
function createDivs(num){
    for(let i = 0; i < num; i++){
        const div = document.createElement('div');
        
        div.style.height = '200px';
        div.style.width = '200px';
        div.style.border = '1px dashed black';
        
        div.style.textAlign = 'center';
        div.textContent = 'JS div grid block';
        
        document.getElementById('grid_container').appendChild(div);
    }
}

createDivs(16);