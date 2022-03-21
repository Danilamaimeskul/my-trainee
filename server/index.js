const express = require('express')
const cors = require('cors')
const projects = require('./data/projects')

const app = express();

app.use(express.static('public'))
app.use(cors())

app.get('/api', (req, res) => {
    res.json({projects})
})

app.listen(5000, () => console.log('runned'))