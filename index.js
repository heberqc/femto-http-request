const http = require('http')
const https = require('https')

exports.request = (method, url, body, headers) => new Promise((resolve, reject) => {

  // validate the method
  const validMethods = ['GET', 'POST', 'PUT', 'DELETE']
  if (!validMethods.includes(method.toUpperCase())) {
    reject('The method is not valid.')
  }

  // protocol and port parameters
  let agent = http
  let protocol = 'http://'
  let port = '80'
  if (url.includes('https://')) {
    agent = https
    protocol = 'https://'
    port = '443'
  } else if (!url.includes(protocol)) {
    reject('The url must starts with `http://` or `https://`.')
  }

  // host, path and maybe port parameters
  const noProtocolUrl = url.slice(protocol.length)
  const posSlash = noProtocolUrl.indexOf('/')
  let host = noProtocolUrl.slice(0, posSlash)
  if (noProtocolUrl.includes(':')) {
    const postColon = noProtocolUrl.indexOf(':')
    host = noProtocolUrl.slice(0, postColon)
    port = noProtocolUrl.slice(postColon + 1, posSlash)
  }
  const path = noProtocolUrl.slice(posSlash)

  const options = {
    method: method.toUpperCase(),
    host,
    port: Number(port),
    path,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      ...(headers || {})
    },
  }

  const responseCallback = (response) => {
    let body = ''
    response.setEncoding('utf8')
    response.on('data', (chunk) => {
      body += chunk
    })
    response.on('end', () => {
      resolve({
        status: response.statusCode,
        headers: response.headers,
        data: JSON.parse(body),
      })
    })
  }

  // do the request
  const request = agent.request(options, responseCallback)
  request.write(body || '', 'utf8')
  request.on('error', (error) => {
    reject(error)
  })
  request.end()
})
