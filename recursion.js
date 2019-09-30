const sheep = (n) => {
  if (n === 0) {
    console.log('All sheep jumped over the fence')
    return;
  }

  console.log(n+': another sheep jumped over the fence')
  sheep(n-1);
}
sheep(5);