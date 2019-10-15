<template>
<div>
    <v-dialog persistent value=true  width="85%">
      <v-card>
        <v-img 
        class="white--text align-end"
        height="600px"
        width="100%"
        :src="noticia.imagem"
      
    >
        </v-img>
        
        <v-text-field   v-model="noticia.imagem" class="mx-3" label="URL"></v-text-field>
        <v-container fluid>
          
          <v-row>
            <v-col  class="display-4 font-weight-black"  cols="10">
              <div >{{ noticia.titulo }}</div>
              <v-text-field  v-model="noticia.titulo" label="Titulo"></v-text-field>
            </v-col>
            <v-col class="blue-grey--text" cols="2">
              <div v-show="noticia.id">{{ noticia.data }}</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="grey--text  display-1">
              <div >{{ noticia.resumo }}</div>
              <v-text-field  v-model="noticia.resumo" label="Resumo"></v-text-field>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="10">
              <div >{{noticia.texto}}</div>
              <v-text-field v-model="noticia.texto" label="Texto"></v-text-field>
            </v-col>
            <v-col cols="2"></v-col>
          </v-row>
          <v-row align="end" justify="end">
            <router-link :to="{name: 'home'}" style="text-decoration: none;">
            <v-btn class="ma-2" tile outlined color="error">
              <v-icon left>mdi-arrow-left</v-icon> Voltar
              </v-btn>
            
              <v-btn class="ma-2" tile outlined color="primary" @click="grava()">
              <v-icon left>mdi-pencil</v-icon> Aplicar
              </v-btn>
              </router-link>
          </v-row>
         </v-container>
      </v-card>
      
    </v-dialog>
</div>

</template>

<script>
  import NewsList from '../news-list/NewsList.vue'
  import Noticia from '../../domain/Noticia.js'
  import NoticiaService from '../../domain/NoticiaService.js'

  export default {
    components: {
      'lista' : NewsList
    },
    data() {
      return {
        noticia: new Noticia(),
        id: this.$route.params.id
      }
    },
    created(){
      this.service = new NoticiaService(this.$resource);
      if(this.id){
      this.service.busca(this.id)
      .then(noticia => this.noticia = noticia)
      .catch(err => console.log(err))
      }
      
    },
      methods:{
        grava(){
          
          this.service.adiciona(this.noticia)
          .then(console.log('sucesso'))
          .catch(err => console.log(err))
        }
      }
}
</script>
<style>

</style>