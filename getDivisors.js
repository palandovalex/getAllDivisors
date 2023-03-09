const getPrimeFactors = (number) => {
  
  const factors = new Map();
  let Z = number
  let lim = Math.sqrt(number)
  console.log(Z);
  
  for (let i = 2; i<=lim;) {
    if(Z==1)
      break
    if (Z%i == 0) {
      Z = Z / i
      let prevPow = factors.get(i) ?? 0;
      factors.set(i, prevPow + 1)
      lim = Math.sqrt(Z)
    }
    else {
      i++;
    }
  }
  if(Z>1){
    let prevPow = factors.get(Z) ?? 0;
    factors.set(Z, prevPow + 1)
  }
  console.log("prime factors: ", factors)
  return factors
}


const buildDivisors = (factors) => {
  if (!factors) {
    return []
  }
  let divisors = [];
  factors.forEach((pow, prime) => {
    let primePows = [prime];
    for (let i = 1; i < pow; i++) {
      primePows.push(primePows.at(-1) * prime);
      
    }
    
    if (divisors) {
      let newDivisors = []
      
      divisors.forEach( (divisor) => {
        primePows.forEach( (primePow) => {
          var newDivisor = divisor * primePow
          newDivisors.push(newDivisor)
        })
      })
      divisors = divisors.concat(newDivisors)
    }
    divisors = divisors.concat(primePows)
  })
  
  divisors.sort((a,b)=> a - b)
  
  divisors.pop()// при построении всех делителей, было реконструировано само число
  
  return divisors
}

const getDivisors = (number)=>{
	let factors = getPrimeFactors(number);
    let divisors = buildDivisors(factors);
    if(divisors)
  	  return divisors
    else
      return ["prime"]
}

console.log("divisors: ", getDivisors(9968))
