//splice and slice
//slice: used to copy the element
//
const data = [
    'bus',
    'car',
    'bike',
    'bicycle',
    'taxi'
];
 const filteredArray = data.splice(2,3);//(start index, deleting numbers)
 console.log(filteredArray);


 const slicedArray = data.slice(0,2);