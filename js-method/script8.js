// promises

const fetchData = async ()=>{
    try{
    const resopnse = await fetch("https://jsonplaceholder.typicode.com/todos/");
    if (!Response.ok) throw new Error(Response.status);
    const result = await Response.json();
    return result;
    }
    catch (e){
        console.log(e);
    }
};
 fetchData().then((result) =>{
    console.log(result);
 })