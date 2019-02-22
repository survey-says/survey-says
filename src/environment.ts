const dev = {
  ersContext: 'http://localhost:3000'
}

const prod = {
  ersContext: 'some aws url'
}

export let environment = dev;

if (process.env.NODE_ENV === 'production') {
  environment = prod;
}