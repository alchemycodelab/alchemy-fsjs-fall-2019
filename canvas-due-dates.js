const { readFileSync } = require('fs')
const http = require('https');
const { parse } = require('url');
const dates = require('./dates.json');

const courseId = readFileSync('./.courseId', 'utf8').trim();
const token = process.env.TOKEN || readFileSync('./.token', 'utf8').trim();

getAssignments()
  .then(assignments => assignments.filter(needsUpdate))
  .then(assignments => {
    return Promise.all(assignments.map(({ id, name }) => {
      return updateAssignmentDueDate(id, dates[name])
    }))
  })
  .then(() => console.log('done'))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

function needsUpdate({ name, due_at, unlock_at, lock_at }) {
  if (dates.hasOwnProperty(name)) {
    const dueDate = new Date(dates[name]).toISOString();
    const currentDueDate = new Date(due_at).toISOString()
    return dueDate !== currentDueDate || unlock_at || lock_at;
  }

  return false;
}

function updateAssignmentDueDate(id, due_at) {
  return getAssignment(id)
    .then(assignment => updateAssignment(id, { ...assignment, unlock_at: null, lock_at: null, due_at }))
}

function updateAssignment(id, assignment) {
  return put(`https://canvas.instructure.com/api/v1/courses/${courseId}/assignments/${id}`, { assignment })
}

function getAssignment(id) {
  return get(`https://canvas.instructure.com/api/v1/courses/${courseId}/assignments/${id}`)
}

function getAssignments() {
  return get(`https://canvas.instructure.com/api/v1/courses/${courseId}/assignment_groups?exclude_response_fields%5B%5D=description&exclude_response_fields%5B%5D=rubric&include%5B%5D=assignments&include%5B%5D=discussion_topic&include%5B%5D=all_dates&include%5B%5D=module_ids&override_assignment_dates=false&per_page=100`)
    .then(json => {
      return json.reduce((acc, category) => {
        return [...acc, ...category.assignments];
      }, []);
    })
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
