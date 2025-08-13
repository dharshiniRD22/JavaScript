// find and findindex

const data = [
    {id:'1', title:'car'},
    {id:'2', title:'bike'},
    {id:'3', title:'taxi'},
    {id:'4', title:'bus'},
    {id:'5', title:'bicycle'}
];

const findindex = data.findIndex((element)=>{
    return element.id=='2';
});
console.log(findindex);

const findindex2= data.findIndex((element)=>{
    return element.title=='taxi';
});
 console.log(findindex2);

 const Find = data.find((ele)=>{
    return ele.title=='bus';
 });
 console.log(Find);

 const Find2 = data.find((ele)=>{
    return ele.id=='5';
 });
  console.log(Find2);