<template>
    <div class="container mx-auto">
        <div class="grid grid-cols-8">
            <div class="col col-span-5 p-5">
                <Card class="">
                    <div @click="grabar" :class="estilo_grabar">
                        <img class="w-32" :src="grabando ? datos.img_detener : datos.img_grabar">
                    </div>
                    <div class="mx-auto">
                        <!--  <select class="p-2 pr-16 bg-slate-600 text-gray-200  text-xl rounded-lg" name="" id="">
                            <option value="">asdsad</option>
                        </select> -->
                        <div class="grid grid-cols-1">
                            <div class="col" v-for="item in datos.opciones_grabar">
                                <Card class="hover:cursor-pointer m-2 shadow-lg" @click="nuevo(item)">
                                    {{ item.titulo }}
                                </Card>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <div class="col col-span-3">
                <Card class="">
                    <NuevaGrabacion :datos="datos_form"></NuevaGrabacion>
                </Card>

            </div>
        </div>
    </div>
</template>
<script>
import NuevaGrabacion from '@/components/form/NuevaGrabacion.vue';
import { opciones_grabar } from '../datos/voz';
import Card from '@/components/cards/Card.vue';
export default {
    name: 'TomarDatos',
    components: {
        Card,
        NuevaGrabacion
    },
    props:{
        datos:{
            type:Object,
            required:true
        }
    },
    data() {
        return {
            opciones_grabar: opciones_grabar,
            grabando: false,
            img_grabar: require('../assets/rec-button.png'),
            img_detener: require('../assets/stop-button.png'),
            estilo_grabar: ' m-10 rounded-full mx-auto w-fit p-5 ',
            datos_form:''
        }
    },
    methods: {
        grabar() {
            this.grabando = !this.grabando;
            let original = ' m-10 rounded-full mx-auto w-fit p-5 ';
            if (this.grabando) {
                this.estilo_grabar += ' animate-pulse';
            } else {
                this.estilo_grabar = original;

            }
        },
        nuevo(t){
            this.datos_form = t;
        }
    }
}
</script>