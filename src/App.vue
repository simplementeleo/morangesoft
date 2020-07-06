<template>
  <v-app>    
    <Nav /> 
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<style lang="scss">
*{
  scroll-behavior: smooth;
}
.container{
  padding: 0 11.4% !important;
  
}
</style>

<script>
import Nav from './components/Nav';

export default {
  name: 'App',

  components: {
    Nav
  },

  data: () => ({
    //
  }),
};
</script>
