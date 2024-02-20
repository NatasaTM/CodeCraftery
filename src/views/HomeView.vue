<template>
  <div data-aos="fade-up" data-aos-duration="900"><Jumbotron /></div>
  
  <div data-aos="fade-up" data-aos-duration="500"><Carousel /></div>

  
  
  <div data-aos="fade-up" data-aos-duration="900">
    
    <section class="probootstrap-cover overlay text-center mt-5">
    <div class="container">
        <div class="row probootstrap-vh-75 align-items-center">
            <div class="col-md-12">
                <h1 class="probootstrap-heading">About Me</h1>
                <p class="probootstrap-subheading  mb-5">I've always pondered how to succinctly describe myself. A woman, a mother, a hard learner, a fighter, a dreamer... 
                  What takes precedence? To be honest, I'm not entirely sure, but for now, let's go with 'hard learner' and 'dreamer.' Learning has always been my true passion. 
                  It might sound a bit 'cheesy,' but it's the absolute truth. It's what led me to where I am today—fighting my way into the world of technology.</p>
                   <p><router-link class="btn btn-custom btn-lg mb-3" :to="{ name: 'about' }" role="button">Read more</router-link></p>
            </div>
        </div>
    </div>
</section>
<!-- end of about me section-->
    
  </div>
  <div data-aos="fade-up" data-aos-duration="500"><CarouselV3 /></div>
  
 <div data-aos="fade-up" data-aos-duration="900"><Contact /></div> 
 

 <div data-aos="fade-up" data-aos-duration="500"><CarouselV4 /></div>

 


</template>

<script>
import Carousel from '@/components/Carousel.vue';
import Contact from '@/components/Contact.vue';
import Jumbotron from '@/components/Jumbotron.vue'

import CarouselV3 from '@/components/CarouselV3.vue';
import CarouselV4 from '@/components/CarouselV4.vue';


//import { RouterView } from "vue-router";

export default {
  
  name: 'home',
  components: {
    Carousel,
    Contact,
   Jumbotron,  
   CarouselV3,
   CarouselV4,
   
  
    
}
}
</script>
