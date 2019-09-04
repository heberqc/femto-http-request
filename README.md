[![npm version](https://badge.fury.io/js/femto-http-request.svg)](https://badge.fury.io/js/femto-http-request)

# femto-http-request

Make http/https requests (GET, POST, PUT and DELETE) in Node.js. Simple, small and light. No dependencies.

How to use:

```javascript
femto.request(
  method,   // string e.g. GET, POST, PUT, DELETE
  url,      // string e.g. https://somehost.com:5863/api/people/1/
  body,     // object
  headers,  // object
) // promise
```

## GET example

GET request to SWAPI (The Star Wars API):

```javascript
const femto = require('femto-http-request')

const requestStatus = femto.request(
  'GET',
  'https://swapi.co/api/people/1/'
).then(response => {
  console.log('response:', response)
}).catch(error => {
  console.log('error:', error)
});
```

Results:

```json
response: {
  "status": 200,
  "headers": {
    "date": "Sun,\n    19 May 2019 20: 58: 59 GMT",
    "content-type": "application/json",
    "transfer-encoding": "chunked",
    "connection": "close",
    ...
  },
  "data": {
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    ...
  }
}
```

## PUT example


```javascript
const changePasswordRequest = femto.request(
  'PUT',                                              // method
  someUrl,                                            // url
  { newPassword },                                    // body
  {                                                   // header
    'Content-Type': 'application/json;charset=UTF-8', //
    'token': token,                                   //
  }                                                   //
).then(response => {
  console.log('response:', response)
}).catch(error => {
  console.log('error:', error)
});
```
