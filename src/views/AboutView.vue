<template>
  <div data-aos="fade-up" data-aos-duration="900">
    <Jumbotron />
  </div>
  <div data-aos="fade-up" data-aos-duration="900">
    <About />
  </div>
  
</template>
<script>

import About from '../components/About.vue'
import Jumbotron from '@/components/Jumbotron.vue';
export default {
 name: 'about',
 components: {
    About,
    Jumbotron
 }
}
</script>
