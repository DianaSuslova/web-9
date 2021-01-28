let student = {
group : 201,
lastName : "Суслова",
firstName : "Диана"
};
console.log((`Список свойств: ${Object.keys(student)}\nСтудент ${student.lastName} ${student.firstName} учится в группе ${student.group}`));



let a = [];
function arrayCut(a){
  for(j = a.length;j>0;j--){
    a.pop();
    if (a.length+1>1) console.log(`${a.length+1} осталось [${a}]`)
    else console.log('1');
  }
}