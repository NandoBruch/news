<template>

  <v-app>

    <v-content>
      <Header/>
      <Footer/>
    </v-content>
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
