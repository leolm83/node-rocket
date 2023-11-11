import { randomUUID } from "node:crypto";


export class DatabaseMemory {
    #videos = new Map();
    //checa se o uuid nao existe no map e se nao existir adiciona o video a lista
    //para garantir um caso raro que poderia ocorrer de sobrescrita
    list(){
        return Array.from(this.#videos.entries()).map((video) => { 
            const id =  video[0]   
            const data = video[1]
            return { id , ...data}
            }
        );
    }
    
    create(video){
        let videoId = null; 
        do{
            // UUID UNIVERSAL UNIQUE ID 
            videoId = randomUUID();
        }while(undefined!==this.#videos.get(videoId));
        console.log(` ID: ${videoId}, VIDEO: ${video["title"]}`);
        this.#videos.set(videoId,video);
    }
    update(id,video){
        console.log(video)
        this.#videos.set(id,video);
    }
    delete(id){
        this.#videos.delete(id);
    }
}