let submitBtn = document.querySelector('#set-color');
let body = document.querySelector('body');

submitBtn.addEventListener('click', function(evt) {
    // prevent default so page does not refresh
    evt.preventDefault();
}
    )    
    
    for(let i = 0; i < 20; i++) {
        let div = document.createElement('div');
        div.classList.add('square');
        body.appendChild(div);
    }
    console.log(submitBtn)
