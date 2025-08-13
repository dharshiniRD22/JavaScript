// mapping


const data = [
    {id: '1', title:'car'},
     {id: '2', title:'bike'},
      {id: '3', title:'taxi'},
       {id: '4', title:'bus'},
        {id: '5', title:'bicycle'}
];

 const upperdata = data.map((item)=>{
    return item.title.toUpperCase();
 }) ;
 console.log(upperdata);