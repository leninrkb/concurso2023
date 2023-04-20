<template>
    <nav class="z-50 fixed w-full border-b-2 border-sky-500  rounded-b-xl backdrop-brightness-50  backdrop-blur-lg">
        <div class="relative">
            <div class="p-2 flex">
                <Boton class="bg-transparent" @click="navegar('/')">Inicio</Boton>
                <Boton class="bg-transparent">Servicios</Boton>
                <img class="absolute right-3 w-12 bg-slate-300 rounded-full p-2 border-2 border-transparent transition-all ease-in-out duration-500 hover:border-sky-500" src="../assets/bank.png" alt="">
            </div>
        </div>
    </nav>
    <div class="h-28"></div>
</template>

<script>
import Boton from './buttons/Boton.vue';
export default{
    name:'Navbar',
    components:{
        Boton
    },
    methods: {
        navegar(p){
            this.$router.push({path:p});
        }
    },
}
</script>
  