
/*

checando apenas o comportamento 
do map na busca de uma chave inexistente

*/

const video = new Map();

video.set("123", "hello")

console.log(undefined===video.get("1234"));