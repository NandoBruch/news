<template>
  <v-app>
      <Header/>
      <router-view></router-view>
      <Footer/>
  </v-app>
</template>

<script>
import Header from './components/shared/header/header.vue';
import Footer from './components/shared/footer/footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data: () => ({
    //
  }),
};
</script>
