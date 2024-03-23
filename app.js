const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index.ejs')
});

app.get('/aboutme', (req, res) => {
    res.render('aboutme.ejs')
})

//#region [Projects]
app.get('/projects', (req, res) => {
    res.render('projects.ejs')
})
//#endregion

app.get('/contact', (req, res) => {
    res.render('contact.ejs')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});