let submitBtn = document.querySelector('#set-color');
let body = document.querySelector('body');
let colorVal = "orange";

submitBtn.addEventListener('click', function(evt) {
    // prevent default so page does not refresh
    evt.preventDefault();

    colorVal = document.querySelector('#color-field').value;
    document.querySelector('.brush').style.backgroundColor = colorVal;
})

body.addEventListener('mouseover', function(evt) {
    if(evt.target.classList.contains('square')) {
        evt.target.style.backgroundColor = colorVal;
    }
})

for(let i = 0; i < 8000; i++) {
    let div = document.createElement('div');
    div.classList.add('square');
    body.appendChild(div);
}
