import {createServer} from 'node:http'

const server = createServer((request, response) => {
    console.log("hello word!");
    response.write("hello!!");
    return response.end();
})

server.listen(3333)