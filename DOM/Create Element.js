// create a Div class
var newDiv = document.createElement('div');

// Add class
newDiv.className = "hello";

//Add ID
newDiv.id = "hello 1";

//Add Attribute
newDiv.setAttribute('title', 'Hello Div');

//create text node
var newDivText = document.createTextNode('Hello world');

//Add text to div
newDiv.appendChild(newDivText);

newDiv.style.fontSize = '30px';

console.log(newDiv);