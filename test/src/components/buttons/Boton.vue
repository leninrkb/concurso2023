<template >
    <button class="p-3 rounded-xl mx-2 text-gray-300 border-2 border-transparent bg-slate-800 transition-all ease-in-out duration-500 hover:bg-sky-500 hover:text-gray-900 focus:border-2 focus:border-sky-500">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name:'Boton'
}
</script>