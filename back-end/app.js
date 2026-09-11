const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello Pamafa! I'm ready for the test!").status(200);
})

const users = [
    { id: 1, name: 'Jorge', age: 25 },
    { id: 2, name: 'Maria', age: 15 },
    { id: 3, name: 'Luiz', age: 56 }
]

app.get('/exercicio06', (req, res) => {
    res.send('Exercício 06').status(200);
});

app.get('/exercicio07', (req, res) => {
    res.send('Exercício 07').status(200);
});

app.get('/exercicio08', (req, res) => {
    res.send('Exercício 08').status(200);
});

const port =  3000
app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
})
