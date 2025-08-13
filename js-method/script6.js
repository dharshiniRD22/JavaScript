//Destructuring

const data = ['dharshini', 'ramesh'];
const[firstname, lastname] = data;
console.log(firstname, lastname);
console.log(firstname);
console.log(lastname);


const data2 = {
    id:1,
    name: "hari praksh",
    lovemusic: true,
    species:" human",
};

 const{name, species} = data2;
 console.log(name, species);
 const{name: fullname} = data2;
 console.log(fullname);