import { fastify} from 'fastify'
/* utilizando o type module no node é preciso 
especificar a extensao .js do arquivo importado!! */
import { DatabaseMemory } from './db/database-memory.js';
import { STATUS_CODES } from 'http';
const server = fastify();
const database = new DatabaseMemory();

server.get('/', ()=>{
    return 'ACESSE /videos para obter um retorno desejado'
})

server.get('/videos', ()=>{
    return 'HELLO ROCKET!!'
})

server.post('/videos', (request, reply)=>{
    database.create({
        "title": 'JS crash course',
        "descricao": "js basics",
        "duration-minutes" : '30'
    })
    console.log(database.list());
    return reply.status(HTTP_STATUS_CODES.CREATED).send();
})


server.get('/videos/:id', ()=>{
    return 'HELLO ROCKET!!'
})

server.put('/videos/:id', ()=>{
    return 'HELLO ROCKET!!'
})

server.delete('/videos/:id', ()=>{
    return 'HELLO ROCKET!!'
})

server.listen(
    {port: 3333});

