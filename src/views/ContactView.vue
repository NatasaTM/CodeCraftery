<template>
  <div data-aos="fade-up" data-aos-duration="900">
    <Jumbotron />
  </div>

  <div data-aos="fade-up" data-aos-duration="900">
    <Contact />
  </div>
    
</template>

<script>
import Contact from '@/components/Contact.vue';
import Jumbotron from '@/components/Jumbotron.vue';
    export default {
       name: 'contact',
       components: {
         Contact,
         Jumbotron
       } 
    }
</script>

