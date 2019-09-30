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

console.log(powerCalculator(3, 3));
