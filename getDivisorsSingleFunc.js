const getDivisors = (number) => {
  let x = 0;
  
  const factors = new Map();
  let Z = number
  let lim = Math.sqrt(number)
  console.log(Z);
  let divisors = [1];
  let primePows = [];
  let newDivisors = [];
  var evenDistincter = 1;
  for (let i = 2; i<=lim;) {
    if(Z==1)
      break
    if (Z%i == 0) {
      Z = Z / i;
      let newPow = i*(primePows.at(-1) ?? 1);
      let currDivisors = divisors.map((a)=>newPow*a);
      newDivisors=newDivisors.concat(currDivisors);
      primePows.push(newPow);
    }
    else {
      i+=evenDistincter;
      evenDistincter=2;
      lim = Math.sqrt(Z);
      divisors = divisors.concat(newDivisors);
      newDivisors = [];
      primePows = [];
    }
  }
  if(Z>1){
    if(Z in divisors)
      Z=Z*Z;
    newDivisors = divisors.map((a)=>a*Z);
    divisors = divisors.concat(newDivisors);
  }
  divisors.shift();
  divisors.pop();
  if(divisors.length==0)
    return "простое";
  
  divisors.sort((a,b)=>a-b);
  return divisors;
}

console.log("simpled divisors: ", getDivisors(89))

console.log("simpled divisors: ", getDivisors(37))
console.log("simpled divisors: ", getDivisors(9968))