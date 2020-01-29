'use strict';

module.exports.products = async (event) => {
  let products = [
    {
      "id":1,
      "name": "Product-1"
    },
    {
      "id":2,
      "name": "Product-2"
    },
    {
      "id":3,
      "name": "Product-3"
    },
    {
      "id":4,
      "name": "Product-4"
    },
    {
      "id":5,
      "name": "Product-5"
    }
  ];
  var response = {
    statusCode: responseCode,
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
    body: JSON.stringify(products)
  };
  return response;
  

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
