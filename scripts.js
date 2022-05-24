const grid_container = document.getElementById('#grid_container');

// for-loop to create 16 divs
for(let i = 0; i < 16; i++){
    const div = document.createElement('div');
    
    div.style.height = '200px';
    div.style.width = '200px';
    div.style.border = '1px dashed black';
    
    div.style.textAlign = 'center';
    div.textContent = 'JS div grid block';
    
    document.getElementById('grid_container').appendChild(div);
}