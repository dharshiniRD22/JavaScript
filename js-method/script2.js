//filtering


const data = [
    {id: '1', title:'car'},
    {id: '2', title:'bike'},
    {id: '3', title:'taxi'},
    {id: '4', title:'bus'},
    {id: '5', title:'bicycle'}
];

const datafilter = data.filter((item)=>{
    return item.id%2 ==0;
});
console.log(datafilter);