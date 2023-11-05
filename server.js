import { fastify} from 'fastify'

const server = fastify();

server.get('/', ()=>{
    return 'HELLO WORLD!!'
})

server.get('/rocket', ()=>{
    return 'HELLO ROCKET!!'
})

server.listen(
    {port: 3333});

