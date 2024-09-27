let next3 = document.querySelector('.next3');
let prev3 = document.querySelector('.prev3');

next3.addEventListener('click', function() {
    let items3 = document.querySelectorAll('.item3');
    document.querySelector('.slide3').appendChild(items3[0]);
});

prev3.addEventListener('click', function() {
    let items3 = document.querySelectorAll('.item3');
    document.querySelector('.slide3').prepend(items3[items3.length - 1]); // here the length of items = 6
});

