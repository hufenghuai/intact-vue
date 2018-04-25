import originJSONP from 'jsonp'

export default function jsonp (url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, res) => {
      if (!err) {
        resolve(res)
      } else {
        reject(err)
      }
    })
  })
}

function param (data) {
  let url = ''
  for (var key in data) {
    const value = data[key] !== undefined ? data[key] : ''
    url += `&${key}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}
