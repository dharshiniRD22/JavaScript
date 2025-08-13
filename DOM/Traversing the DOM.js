var itemList = document.querySelector('#itemList');
//parent Node
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

//parent element
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

//child Node
console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor ='yellow';

//First child
console.log(itemList.firstChild);

//first EElement child
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent ='hello 1';

//Last child
console.log(itemList.lastChild);

//last Element child
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent ='hello 4';

//Next Sibling
console.log(itemList.nextSibling);

// next element sibling
console.log(itemList.nextElementSibling);

//previous sibling
console.log(itemList.previousSibling);

//previous element sibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';
