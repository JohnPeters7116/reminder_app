const express = require('express')
const hbs = require('hbs')

const port = process.env.PORT || 9000

var app = express()

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.render('main.hbs')
})
// app.get('/about', (req, res) => {
//   res.render('about.hbs')
// })

app.listen(port, () => console.log(`Server is on port ${port}`))