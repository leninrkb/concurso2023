<template>
    <div class="m-3">
        <label class="text-2xl font-semibold ">
            Nueva accion:  {{ datos.titulo }}
        </label>
    </div>
    <div class="grid grid-cols-1">
        <div class="col">
            <Input></Input>
        </div>
        <div class="col">
            <Input></Input>
        </div>
        <div class="col">
            <Input></Input>
        </div>
        <div class="col">
            <Input></Input>
        </div>
        <div class="col">
            <div class="mt-10 mx-auto w-fit">

                <Boton>Cancelar</Boton>
                <Boton>Guardar</Boton>
            </div>
        </div>
    </div>
</template>
<script>
import Boton from '../buttons/Boton.vue';
import Input from './Input.vue';
export default {
    name:'NuevaGrabacion',
    components:{
        Input,
        Boton
    },
    props:{
        datos:{
            type:Object,
            rquired:true
        }
    }
}
</script>