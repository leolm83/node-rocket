import { fastify} from 'fastify'
/* utilizando o type module no node é preciso 
especificar a extensao .js do arquivo importado!! */
import { DatabaseMemory } from './db/database-memory.js';
import { HTTP_STATUS_CODES } from './http/http-status-codes.js'
const server = fastify();
const database = new DatabaseMemory();

server.get('/', ()=>{
    return 'ACESSE /videos para obter um retorno desejado'
})

server.get('/videos', ()=>{
    return database.list();
})

server.post('/videos', (request, reply)=>{

    const { title, description, durationSeconds } =  request.body;
    if(title==undefined || description == undefined || durationSeconds == undefined){
        return reply.status(HTTP_STATUS_CODES.BAD_REQUEST).send();
    }

    database.create({
        title,
        description,
        durationSeconds
    })
    return reply.status(HTTP_STATUS_CODES.CREATED).send();
})


server.get('/videos/:id', ()=>{
    return 'HELLO ROCKET!!'
})

server.put('/videos/:id', (request, reply)=>{
    const videoId = request.params.id;
    const { title, description, durationSeconds} = request.body;
    database.update(videoId,{
        title,
        description,
        durationSeconds
    })
    
    return reply.status(HTTP_STATUS_CODES.NO_CONTENT).send()
})

server.delete('/videos/:id', (request, reply)=>{
    const videoId = request.params.id;
    database.delete(videoId);
    return reply.status(HTTP_STATUS_CODES.NO_CONTENT).send()
})

server.listen(
    {port: 3333});

