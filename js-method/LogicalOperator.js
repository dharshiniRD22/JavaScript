const a = 42;
 const b = "hello";
 const c = null;
 console.log(a||b);
 console.log(c||b);
 console.log(a&&b);
 console.log(a&&c);

 function greet (ram){
    console.log(`hello, ${'ram'||'sam'}`);
 }
 greet();
 
 function greet1 (name){
    console.log(`hello, ${name||'sam'}`);
 }
 greet1();

 function greet2(name){
    console.log(`hello,${name||'sam'}`);
 }
 greet2('dharshini');