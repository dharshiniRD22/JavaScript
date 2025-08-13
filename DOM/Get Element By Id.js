
//GETELEMENTBY ID

// console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);

headerTitle.textContent ="Hello";
headerTitle.innerText = "Good bye";
console.log(headerTitle.textContent);
console.log(headerTitle.innerText);

headerTitle.innerHTML = "<h1>Hello</h1>";

// headerTitle.style.borderBottom = "solid 3px #000";

var header = document.getElementById('main-header');
header.style.borderBottom = "solid 4px #000";

 