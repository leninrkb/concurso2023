<template>
    <div class="rounded-2xl bg-slate-400 transition ease-in-out duration-500 hover:bg-slate-700">
        <div class="text-gray-800 p-3 transition ease-in-out duration-300 hover:text-gray-300">
            <slot></slot>
        </div>
    </div>
</template>
<script>

export default {
    name:'Card'
}
</script>