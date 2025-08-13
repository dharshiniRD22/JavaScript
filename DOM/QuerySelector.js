var header = document.querySelector('#main-header');
header.style.borderBottom = "solid 4px #000";

var input = document.querySelector('input');
input.value = "Enter text here";

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

var item = document.querySelector('.list-group-item');
item.style.color = "red";

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = "blue";


var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = "purple";




