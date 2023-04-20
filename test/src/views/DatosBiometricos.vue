<template>
    <TomarDatos :datos="datos"></TomarDatos>
</template>
<script>
import {datos_biometricos} from '../datos/rostro'
import TomarDatos from '@/components/TomarDatos.vue';
export default {
    name:'DatosBiometricos',
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
            opciones_grabar: datos_biometricos,
            datos: null,
            img_grabar: require('../assets/deteccion-de-rostro.png'),
            img_detener: require('../assets/detener.png'),
        }
    },

}
</script>