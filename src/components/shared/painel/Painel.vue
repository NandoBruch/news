<template>
<v-hover v-slot:default="{ hover }">
  <v-card class="mb-12" max-width="400" :elevation="hover ? 12 : 2">
    <v-img 
      class="white--text align-end"
      height="200px"
      :src="imagem"
      
    >
      <v-card-title>{{titulo}}</v-card-title>
    </v-img>
    <v-card-subtitle class="ps-3"> {{ formataData }} </v-card-subtitle>
    <v-card-text class="text--primary">
      <div>{{resumo}}</div>
    
    </v-card-text>
    
    <v-card-actions>
    <router-link class="underline" :to="{ name: 'edita' , params: { id: ad }}">
      <v-btn color="orange" text >
          Editar
      </v-btn>
    </router-link>
    </v-card-actions>
  
  </v-card>
  </v-hover>
</template>
<script>
export default {
    props: ['titulo', 'data', 'resumo', 'imagem', 'ad'],

  computed: {
      formataData(){
          if(this.data){
              let date = new Date(this.data);
              return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
          }
        }
  }
}
</script>
<style scoped>
.underline{
    text-decoration: none;
}
</style>