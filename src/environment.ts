const dev = {
  apiContext: 'http://localhost:5500'
}

const prod = {
  apiContext: 'http://ec2-18-191-199-251.us-east-2.compute.amazonaws.com:5500/'
}

export let environment = dev;

if (process.env.NODE_ENV === 'production') {
  environment = prod;
}