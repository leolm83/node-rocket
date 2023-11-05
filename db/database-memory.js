import { randomUUID } from "node:crypto";


export class DatabaseMemory {
    #videos = new Map();
    //checa se o uuid nao existe no map e se nao existir adiciona o video a lista
    //para garantir um caso raro que poderia ocorrer de sobrescrita
    list(){
        return this.#videos.values();
    }
    
    create(video){
        do{
            // UUID UNIVERSAL UNIQUE ID 
            const videoId = randomUUID();
        }while(undefined===this.#videos.get(videoId));
        this.#videos.set(video);
    }
    update(id,video){
        this.#videos.set(id,video);
    }
    delete(id){
        this.#videos.delete(id);
    }
}