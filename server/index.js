const express = require('express')

const projects = require('./data/projects').projects

const app = express();

app.use(express.static('public'))


app.get('/api', (req, res) => {
    const searchValue = req.query.value.toLowerCase()
    let filtred = projects.filter(({title, description}) => {
        return searchValue === '' || (title.toLowerCase().includes(searchValue.toLowerCase()) || description.toLowerCase().includes(searchValue.toLowerCase()))
    })
    res.json({filtred});
});

app.listen(5000, () => console.log('runned'))