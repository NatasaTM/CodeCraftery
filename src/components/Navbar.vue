<template>
    <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div class="container">
        <router-link class="navbar-brand" :to="{ name: 'home'}">CodeCraftery</router-link>
        <div class="ml-auto">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" aria-current="page" :to="{ name: 'home'}" exact>Home</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="blog.html">Blog</a>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'about' }">About me</router-link>
              </li>
             
              <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'contact'}">Contact</router-link>
              </li>


            </ul>
          </div>


        </div>
      </div>
    </nav>
  </header>
</template> 


<script>
import { RouterLink } from "vue-router";
export default {
    name: 'Navbar'
}
</script>
