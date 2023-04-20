<template>
  <Navbar></Navbar>
  <router-view/>
  <Footer></Footer>
</template>


<script>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
export default{
  name:'App',
  components:{
    Footer,
    Navbar
  }
}
</script>

<style>
html{
  background-color: #050513;
  opacity: 0.8;
  background-image:  linear-gradient(#010208 1px, transparent 1px), linear-gradient(to right, #010208 1px, #050513 1px);
background-size: 20px 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
