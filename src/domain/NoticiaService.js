export default class NoticiaService {
    constructor(resource){
        this._resource = resource('noticias{/id}')
    }

    lista(){
        return this._resource
            .query()
            .then(res => res.json())
            .catch(err => console.log(err))
    }

    adiciona(noticia){
        console.log(noticia)
        if(noticia.id) return this._resource.update({id: noticia.id}, noticia)
        noticia.data = new Date;
        return this._resource.save(noticia); 
    }
    busca(id){
        return this._resource
        .get({ id })
        .then(res => res.json())
        .catch(err => console.log(err))
    }

}