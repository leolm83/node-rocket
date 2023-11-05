import { fastify} from 'fastify'

const server = fastify();

server.get('/', ()=>{
    return 'ACESSE /videos para obter um retorno desejado'
})

server.get('/videos', ()=>{
    return 'HELLO ROCKET!!'
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

