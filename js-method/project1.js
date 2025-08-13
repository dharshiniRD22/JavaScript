const studentData = [
    {name:"john", score:91},
    {name:"ravi", score:82},
    {name:"sneha", score:44},
    {name:"aarthi", score:29}
];

function studentGrade(Data){
    const result = studentData.map(student => {
        if(Data.score >=90){
            return student.name + student.score  +"A";
        } else if (Data.score >= 80) {
            return student.name + student.score + "B";
        } else if (Data.score >= 70) {
            return student.name + student.score + "C";
        } else {
            return student.name + student.score + "D";
        }
    });
    return result;
}
console.log(studentGrade(studentData));



function topscore(data){
    return studentData.filter(student => student.score >=75);
}
console.log(topscore(studentData));



const FindName = studentData.find((ele) =>{
    return ele.name =='ravi';
});
console.log(FindName);

function fail(ele){
    const failed = studentData.filter((ele)=>{ return ele.score < 35; })
 if(failed.length > 0){
    return failed.map(student => student.name);
 } else {
    return "No student failed";
 }
}

console.log(fail(studentData));