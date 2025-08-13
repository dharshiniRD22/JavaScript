// scoping

const name = " hello dharshini";
 function scope(){
    const name = " hiiii dharshini";
    console.log(name);
 }
 console.log(name);
 scope();

//  block scoping
const name1 = " hiiii"
function BlockScope(){
    const name1 = " hello"
    if(true){
        const name1 = " heyyyy"
        console.log(name1);
    }
    console.log(name1);
}
console.log(name1);
BlockScope();
