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

{
  const a =[2,3,4];
  let b = [1, ...a, 5];
  console.log('b',b);
}

{
  function foo(x,y, ...z){
    console.log(x,y,z);
    // this is essentially gathering all missing objects and bundling them into an array called z
    // z = [3,4,5,6];
  }
  foo(1,2,3,4,5,6);
}

{
  function arguments(...args){
    console.log('args', args);
  }
  arguments(2,6,8,9,4,'this is a string');
  // bundles all arguments given into an array
}
