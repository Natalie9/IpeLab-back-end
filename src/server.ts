import express, { request, response } from 'express';

//iniciando express
const app = express()

//criando uma rota hello que retorna uma mensagem no navegador 
app.get('/hello', (request, response) => {
    return response.send('Hello user');
})

//criando uma rota users que retorna um json. 
app.get('/users', (request, response) => {
    const users = {
        'name': 'Natalie',
        'age': 19
    }
    return response.json(users);
})

//vai ouvir requisições HTTP, na porta 3333
app.listen(3333)