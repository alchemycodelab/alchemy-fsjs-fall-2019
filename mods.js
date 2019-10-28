const fs = require('fs')
const http = require('https');

const token = fs.readFileSync('./.token', 'utf8').trim();

const sourceId = '1737535';
const targetId = '1547362';

Promise.all([
  getModules(sourceId),
  getModules(targetId)
])
  .then(([sourceModules, targetModules]) => {
    const neededModules = sourceModules.filter(mod => targetModules.some(targetMod => targetMod.name === mod.name));
    console.log(neededModules);
  });

function getModules(courseId) {
  return get(`https://canvas.instructure.com/api/v1/courses/${courseId}/modules`)
}

function get(url, headers = { Authorization: `Bearer ${token}` }) {
  return new Promise((resolve, reject) => {
    http
      .get(url, { headers }, res => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(JSON.parse(data)));
        res.on('error', reject);
      });
  })
}

function put(url, body, headers = { Authorization: `Bearer ${token}` }) {
  return new Promise((resolve, reject) => {
    const req = http.request({
      ...parse(url),
      method: 'PUT',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      }
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
      res.on('error', reject);
    });

    req.write(JSON.stringify(body));
    req.end();
  })
}

function del(url, headers = { Authorization: `Bearer ${token}` }) {
  return new Promise((resolve, reject) => {
    const req = http.request({
      ...parse(url),
      method: 'DELETE',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      }
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
      res.on('error', reject);
    });

    req.end();
  })
}
