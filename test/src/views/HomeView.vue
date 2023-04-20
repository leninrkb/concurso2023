<template>
  <div class="container mx-auto">

  <div class="grid grid-cols-2 gap-3 m-3">
    <div class="col" v-for="item in opciones" :key="item">
      <CardInfo :datos="item"></CardInfo>
    </div>
  </div>
</div>

</template>

<script>
import {opciones} from '../datos/inicio';
import CardInfo from '@/components/cards/CardInfo.vue';
export default { 
  name: 'HomeView',
  components: {
    CardInfo
  },
  data() {
    return {
      opciones: opciones
    }
  },

}
</script>

