var button = document.getElementById('button');
button.addEventListener('click', runevent);
// button.addEventListener('dblclick', runevent);
// button.addEventListener('mousedown', runevent);
// button.addEventListener('mouseup', runevent);


var box = document.getElementById('box');
// box.addEventListener('mouseenter', runevent);
// box.addEventListener('mouseleave', runevent);
// box.addEventListener('mouseover', runevent);
// box.addEventListener('mouseout', runevent);
// box.addEventListener('mousemove', runevent);

var itemInput = document.querySelector('input[TYPE="text"]');
var form = document.querySelector('form');
// itemInput.addEventListener('keydown', runevent);// if shift/ctrl can also trigger this
// itemInput.addEventListener('keyup', runevent);
// itemInput.addEventListener('keypress', runevent); // only if writeable character can trigger this

// itemInput.addEventListener('focus', runevent);
// itemInput.addEventListener('blur', runevent);
// itemInput.addEventListener('cut', runevent);
// itemInput.addEventListener('paste', runevent);

// itemInput.addEventListener('input', runevent); // this will trigger on every change in the input field
// var select = document.getElementById('select');
// select.addEventListener('change', runevent);

form.addEventListener('submit', runevent);

function runevent(e){
    console.log("EVENT TYPE: "+e.type);
    // output.innerHTML = '<h3>MouseX:' + e.offsetX + '</h3><h3>MouseY:' +e.offsetY+'</h3>';
    // console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
    // document.body.style.display = 'none';// can be used only for cut and paste
    e.preventDefault();
    box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
    document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
}