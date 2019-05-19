# femto-http-request

Make simple http/https requests.

```javascript
const femto = require('femto-http-request')

const requestStatus = femto.request(
  'GET',
  'https://swapi.co/api/people/1/'
)
requestStatus.then(response => {
  console.log('response:', response)
})

requestStatus.catch(err => {
  console.log('err:', err)
})
```

```json
{
  "status": 200,
  "headers": {
    "date": "Sun,\n    19 May 2019 20: 58: 59 GMT",
    "content-type": "application/json",
    "transfer-encoding": "chunked",
    "connection": "close",
    "set-cookie": [
      "__cfduid=dd3112ffe1077a881fd3119e8b5ce63871558299538; expires=Mon,\n      18-May-20 20: 58: 58 GMT; path=/; domain=.swapi.co; HttpOnly; Secure"
    ],
    "vary": "Accept, Cookie",
    "allow": "GET, HEAD, OPTIONS",
    "x-frame-options": "SAMEORIGIN",
    "etag": "\"145c70f4eca80b4752674d42e5bf1bcf\"",
    "via": "1.1 vegur",
    "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
    "server": "cloudflare",
    "cf-ray": "4d98fdf5fb1b6777-EZE"
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
    "homeworld": "https: //swapi.co/api/planets/1/",
    "films": [
      "https: //swapi.co/api/films/2/",
      "https: //swapi.co/api/films/6/",
      "https: //swapi.co/api/films/3/",
      "https: //swapi.co/api/films/1/",
      "https: //swapi.co/api/films/7/"
    ],
    "species": [
      "https: //swapi.co/api/species/1/"
    ],
    "vehicles": [
      "https: //swapi.co/api/vehicles/14/",
      "https: //swapi.co/api/vehicles/30/"
    ],
    "starships": [
      "https: //swapi.co/api/starships/12/",
      "https: //swapi.co/api/starships/22/"
    ],
    "created": "2014-12-09T13: 50: 51.644000Z",
    "edited": "2014-12-20T21: 17: 56.891000Z",
    "url": "https: //swapi.co/api/people/1/"
  }
}
```
