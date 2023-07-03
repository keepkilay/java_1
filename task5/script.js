document.querySelector('button').onclick = myClick;

function myClick() {
    //console.log('work');
    //get input
    //input - value
    let a = document.querySelector('.textForm').value;
    console.log(a);
    document.querySelector('#duplicateField').textContent = a;
}

let btnClear = document.querySelector('button');
let inputs = document.querySelectorAll('input');
let p = document.querySelectorAll('#duplicateField');
btnClear.addEventListener('click', () => {
inputs.forEach(input => input.value = '');

});





