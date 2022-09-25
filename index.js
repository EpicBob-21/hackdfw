const express = require('express')
const app = express()
const port = 3001
const { exec } = require('child_process');
const path = require('path');





app.get('/', (req, res) => {
exec('pwd', (error, stdout, stderr) => {
  if (error) {
    console.error(`error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

	//res.send(`\n${stdout}`);
    res.sendFile(path.join(__dirname, '/index.html'));});

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
