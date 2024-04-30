var express = require('express')

var app = express()

const PORT = process.env.PORT

var userList = [
    "Fikret",
    "Merve"
]

app.get('/api/user', function (req, res) {
    return res.status(200).send(userList)
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`))