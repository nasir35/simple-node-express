const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())
const port = 5000;

const users = [
    { id: 1, name: 'Nasir', email: 'nasir2242001@gmail.com', phone: '01788888888' },
    { id: 2, name: 'faysal', email: 'foysal@gmail.com', ismarried: 'no', phone: '01788888888', havegf: 'yes' },
    { id: 3, name: 'arif', email: 'arif@gmail.com', ismarried: 'no', phone: '01788888888', havegf: 'yes' },
    { id: 4, name: 'sayma', email: 'sayma@gmail.com', ismarried: 'no', phone: '01788888888' }
]

app.get('/users', (req, res) => {
    res.send(users)
})
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    res.send(users[id]);
})
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length+1;
    users.push(newUser);
    console.log('inside post', req.body);
    res.json(newUser)
})
app.listen(port, () => {
    console.log('listening.....', port);
})