let size = 8
let backgroundColor = "#d8e2dc"

const container = document.querySelector('#container');

function init() {
    // This creates (size * size) number of divs in the container and adds it to the DOM
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.setAttribute('data-colored', 'false');
        div.style.cssText = `background-color: ${backgroundColor}`;

        div.addEventListener('mouseover', () => {
            // Only recolors a box if it was not already colored
            colored = (div.getAttribute('data-colored') == 'false') ? false : true;
            if(!colored){
                div.style.cssText = 'background-color: #f4acb7';
                div.setAttribute('data-colored', 'true');
            }
        });
        container.appendChild(div);
    }
    // Sets the grid size in CSS
    container.style.cssText = `grid-template-columns: repeat(${size}, 1fr);`;
}

init();