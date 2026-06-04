const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running');
});

//error handling
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("Server running on port 9000")
})
