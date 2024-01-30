const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 1245;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.trim().split('\n');
        const students = {};
        const fields = {};
        let output = '';

        for (const line of lines) {
          if (line) {
            const row = line.split(',');

            if (row[3] in students) {
              students[row[3]].push(row[0]);
            } else {
              students[row[3]] = [row[0]];
            }

            fields[row[3]] = (fields[row[3]] || 0) + 1;
          }
        }

        const totalStudents = lines.length - 1;
        output += `Number of students: ${totalStudents} \n`;

        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${students[key].join(', ')}\n`;
          }
        }
        resolve(output);
      }
    });
  });
}

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      countStudents(process.argv[2].toString()).then((output) => {
        const content = output.slice(0, -1);
        res.end(content);
      }).catch(() => {
        res.statusCode = 404;
        res.end('Cannot load the database');
      });
    } catch (error) {
      res.statusCode = 404;
      res.end('Cannot load the database');
    }
  }
});

app.listen(port, hostname, () => {
});

module.exports = app;
