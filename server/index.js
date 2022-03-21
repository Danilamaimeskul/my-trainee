const express = require('express')

const projects = require('./data/projects').projects

const app = express();

app.use(express.static('public'))


app.get('/api', (req, res) => {
    res.json({projects})
})

app.listen(5000, () => console.log('runned'))