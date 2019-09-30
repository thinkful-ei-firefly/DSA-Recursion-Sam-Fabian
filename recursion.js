const sheep = (n) => {
  if (n === 0) {
    console.log('All sheep jumped over the fence')
    return;
  }

  console.log(n+': another sheep jumped over the fence')
  sheep(n-1);
}
//sheep(5);

const powerCalculator = (base, exponent) => {
  if (exponent < 0 ){
    return console.log('Exponent should be >= 0')
  }else if(exponent ===0 ){
    return 1;
  }
  return base*(powerCalculator(base, exponent-1))
}

// console.log(powerCalculator(3, 3));

const reverseString = (str) => {
  if (!str.length) return ""

  return reverseString(str.slice(1)) + str[0]
}

// console.log(reverseString('reverse'))


const triangularNumber = (n) => {
  if (n===1) return 1;
  return triangularNumber(n-1) + n
}

//console.log(triangularNumber(2345))

const stringSplitter = (str, splitter) => {
  if (!str.length) return ''

  if (str[0] === splitter) {
    return stringSplitter(str.slice(1), splitter)
  }
  return str[0] + stringSplitter(str.slice(1), splitter)
}

// console.log(stringSplitter('02/20/2020', '/'))

const fibonacci = n => {
  if (n <= 0) return 'Number must be > 0'
  let aux = fibonacci(n-1)
  const lastNumber = aux[aux.length-1] || 0;
  const second = aux[aux.length-2] || 0;
  if (n === 1) return [1]
  return [...aux, lastNumber+second]
}

//console.log(fibonacci(5));

const factorial = num => {
  if (num <=0) return 1

  return num*factorial(num-1)
}

// console.log(factorial(6));