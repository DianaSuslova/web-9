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

b = String;
function isPalindrome(b){
  let r = 0;
  for (let i = 0; i<=b.length-1; i++) {
    if (b[i] == b[b.length - i-1]) r++;
  }
  return((r == b.length));
}


q = [];
let answer = '';
function scalarMultiplication(n, q) {
  for (let i = 0; i<q.length;i++){
    answer = '';
    for (let j = 0; j<q.length; j++){
      q[i][j]*=n;
      answer += q[i][j] + '   ';
    }
    console.log(`${answer}`);
  }
}