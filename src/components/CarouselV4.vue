<template>
    <h2 class="probootstrap-heading text-center text-white">Blog 4</h2>
    <div class="container mt-5 text-center">
    <Carousel :itemsToShow="itemsToShow" :wrapAround="true" :transition="500">
      <Slide v-for="item in carouselData" :key="item.id">
        
        <div class="card mx-5" style="width: 18rem;">
            <img :src="require(`../assets/images/jpg/${decodeURIComponent(item.imageUrl)}`)" class="card-img-top" alt="...">

            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.text }}</p>
              <a href="#" class="btn btn-custom btn-lg mb-3">Go somewhere</a>
            </div>
          </div>
        
        
      </Slide>
      <template #addons>
          <Pagination />
          <Navigation />
        </template>
        
  
      ...
    </Carousel>
</div>
  </template>
  
  
  <script>
  import axios from 'axios';
  import { defineComponent } from 'vue';
  import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel';
  import { ref } from 'vue';
  
  import 'vue3-carousel/dist/carousel.css';
  
  
  
  
  export default defineComponent({
    name: 'Autoplay',
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
      
    
    },
    setup() {
      const carouselData = ref([]); // Array to store carousel data
  
      const fetchCarouselData = async () => {
        try {
          // Make API request to fetch carousel data from the server
          const response = await axios.get('http://localhost:8080/api/data');
          carouselData.value = response.data; // Update carouselData with fetched data
          console.log('Carousel data:', JSON.stringify(carouselData.value));
        } catch (error) {
          console.error('Error fetching carousel data:', error);
        }
      };
  
      // Fetch carousel data from server when the component is created
      fetchCarouselData();
  
      // Reactive variable to determine the number of items to show in the carousel
      const itemsToShow = ref(2.5);
  
      // Update the number of items to show based on screen width
      const updateItemsToShow = () => {
        itemsToShow.value = window.innerWidth < 1000 ? 1 : 3.95;
      };
  
      // Call the function initially and whenever the window is resized
      window.addEventListener('resize', updateItemsToShow);
      updateItemsToShow();
  
      return {
        carouselData,
        itemsToShow,
      };
    }
  })
  
  </script>
  
  <style scoped>
  .carousel__slide {
    padding: 5px;
  }
  
  .carousel__viewport {
    perspective: 2000px;
  }
  
  .carousel__track {
    transform-style: preserve-3d;
  }
  
  .carousel__slide--sliding {
    transition: 0.5s;
  }
  
  .carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
  }
  
  .carousel__slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.9);
  }
  
  .carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
  }
  
  .carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
  }
  
  .carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
  }
  </style>
  