//Event
var button = document.getElementById('button');
button.addEventListener('click',buttonClick);
function buttonClick(e){
    alert("button is clicked !");
    console.log("button is clicked !");
    document.getElementById('header-title').textContent = "Changed Title";
    console.log("header title is changed");
    document.getElementById('main').style.backgroundColor = "#f4f4f4";
    console.log("background color is changed");
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
    var output = document.getElementById('output');
    output.innerHTML ='<h3>'+e.target.id+'</h3>';
    console.log(e.type);
    console.log(e.client);
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.offsetX);
    console.log(e.offsetY);
    console.log(e.altKey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);
}
