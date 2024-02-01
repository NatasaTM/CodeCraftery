<template>
  <Navbar />
  <!--<div data-aos="zoom-in"><Jumbotron /></div>
 -->
  
  <router-view/>
  <Footer />
  
 
</template>
<script>
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'
//import Jumbotron from './components/Jumbotron.vue';

import { RouterView } from "vue-router";




  export default {
    components: {
    Navbar, Footer,
    
    
}
  }
</script>


