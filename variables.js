var funcs = [];

for(let i = 0; i < 5; i++){
  funcs.push(function(){
      console.log('i', i);
      // logs out to three because i is created on each iteration of the loop
  });
}

funcs[3]();

{
  const a = 2;
  console.log('a', a);

  //a = 3;  this creates a type error because const can't be over-ridden

}

{
  const a = [1,2,3];
  a.push(4); // we can add array values to this even though it is a const
  console.log('a',a);
  // a = 42 would also produce an error because you can't adjust the assignment of the variable
}
