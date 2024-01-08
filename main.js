


// // alert(1);

// // Single element

// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));


// // Multiple element

// console.log(document.querySelectorAll('.item'));


// const items = document.querySelectorAll('.item');


// items.forEach(element => {
//     console.log(element);
// });


// const ul = document.querySelector('.items')

// console.log(ul);

// // ul.remove(); // Remove an element

// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// btn.style.backgroundColor = 'red';


// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('Click!')
// })


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const users = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    
    if (nameInput.value === '' || emailInput.value === '') {
        msg.innerHTML = 'Please enter all fields!';

        setTimeout(() => msg.remove(), 3000);
    
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))

        userList.appendChild(li);

        // Clear fields

        nameInput.value = '';
        emailInput.value = '';
    }

}










