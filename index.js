const express = require('express')
const app = express()
const port = 3001
const { exec } = require('child_process');
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));


app.get('/', (req, res) => {


	
    res.sendFile(path.join(__dirname, '/index.html'));
    
    //while(True){
   // }
    
});
app.post('/', (req, res) => {
    // Insert Login Code Here
    var myText = req.body.code;
    //console.log(myText)
    exec('pwd', (error, stdout, stderr) => {
        if (error) {
          console.error(`error: ${error.message}`);
          return;
        }
      
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return;
        }
        res.send(myText + `\n${stdout}`);
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
