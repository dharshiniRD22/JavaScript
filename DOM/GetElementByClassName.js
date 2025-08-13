var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = "Hello";
items[1].style.fontWeight = "bold";
items[1].style.backgroundColor = "yellow";

//Error

// items.style.backgroundColour = "#f4f4f4";

for(var i=0; i<items.length; i++){
    items[i].style.backgroundColor = "#f4f4f4";
}
items[0].style.textAlign="center";