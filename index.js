const express = require('express')
const app = express()
const port = 3001
const { exec } = require('child_process');
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));



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

	
    res.sendFile(path.join(__dirname, '/index.html'));
    
    //while(True){
   // res.send(myText + `\n${stdout}`);}
    
});
app.post('/', (req, res) => {
    // Insert Login Code Here
    var myText = req.body.code;
    //console.log(myText)
    res.send(myText);
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
