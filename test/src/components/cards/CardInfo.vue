<template>
    <Card class="transition ease-in-out duration-500 hover:scale-110" @click="navegar">
        <p class="text-xl uppercase font-semibold mt-3 ml-3">
          {{ datos.titulo }}
        </p>
        <div class="flex justify-center rounded-xl">
          <img class="w-40" :src="datos.imagen">
        </div>
        <p class="text-center m-3">
            {{ datos.detalle }}
            
        </p>
      </Card>
</template>
<script>
import Card from './Card.vue';
export default {
    name:'CardInfo',
    components:{
        Card
    },
    props:{
        datos:{
            type:Object,
            required:true
        }
    },
    methods: {
        navegar(){
            this.$router.push({path:this.datos.ruta});
        }
    },
}
</script>