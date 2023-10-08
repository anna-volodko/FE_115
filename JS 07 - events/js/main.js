const angle = document.querySelector('.angle');
const border = document.querySelector('.border');

let computedStyles = getComputedStyle(border);
let borderWidth = parseInt(computedStyles.width);
let borderHeight = parseInt(computedStyles.height);

let x0;
let y0;
let x1;
let y1;
let diffX;
let diffY;

function pointerMove(event) {
    x1 = event.x;
    y1 = event.y;

    diffX = x1 - x0;
    diffY = y1 - y0;

    if(diffX > 0) {
        border.style.width = borderWidth + diffX + 'px'
    }
    if(diffY > 0) {
        border.style.height = borderHeight + diffY + 'px'
    }

    document.addEventListener('pointerup', function() {
        document.removeEventListener('pointermove', pointerMove)
    })
}

function pointerDown(event) {
    x0 = event.x;
    y0 = event.y;

    document.addEventListener('pointermove', pointerMove)
}


angle.addEventListener('pointerdown', pointerDown);