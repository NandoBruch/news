<template>
    <v-container>
         <v-row justify="left" align="center" align-content="left">
             <v-col v-for="noticia of noticias" cols="12" sm="4">
                    <painel 
                    :titulo="noticia.titulo"
                    :data="noticia.data"
                    :resumo="noticia.resumo"
                    :imagem="noticia.imagem"
                    :ad="noticia.id"
                    >
                    </painel>
              </v-col>
        </v-row>
    <router-link :to="{ name: 'cadastra' }">
        <v-btn fab color="pink" fixed bottom right  style="bottom:50px">
            <v-icon color="white">mdi-plus</v-icon>      
        </v-btn>
    </router-link>
    </v-container>
</template>
<script>
import NoticiaService from '../../domain/NoticiaService.js'
import Painel from '../shared/painel/Painel.vue'

export default {
    components: {
        "painel" : Painel
    },
    data(){
        return{
            noticias: []
        }
    },
     created(){
        
    this.service = new NoticiaService(this.$resource);
    this.service.lista()
    .then(noticias => this.noticias = noticias)
    .catch(err => console.log(err))
  },
  updated(){
     
  }

}
</script>
<style>
</style>