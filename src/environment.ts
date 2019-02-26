const dev = {
  apiContext: 'http://localhost:5500'
}

const prod = {
  apiContext: 'some aws url'
}

export let environment = dev;

if (process.env.NODE_ENV === 'production') {
  environment = prod;
}