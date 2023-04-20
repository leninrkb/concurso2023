<template>
    <TomarDatos :datos="datos"></TomarDatos>
</template>
<script>
import {opciones_grabar} from '../datos/voz'
import TomarDatos from '@/components/TomarDatos.vue';
export default {
    name:'ComandoVoz',
    components:{
        TomarDatos
    },
    created() {
        this.datos = {
            opciones_grabar: this.opciones_grabar,
            img_detener: this.img_detener,
            img_grabar:this.img_grabar
        }
    },
    data() {
        return {
            opciones_grabar: opciones_grabar,
            datos: null,
            img_grabar: require('../assets/rec-button.png'),
            img_detener: require('../assets/stop-button.png'),
        }
    },

}
</script>