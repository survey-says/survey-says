const dev = {
  apiContext: 'http://localhost:5500'
}

const prod = {
  apiContext: 'http://ec2-18-220-155-55.us-east-2.compute.amazonaws.com:5500/'
}

export let environment = dev;

if (process.env.ENVIRONMENT === 'production') {
  environment = prod;
}