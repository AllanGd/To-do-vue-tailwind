<template>
    
    <div :class="{'bg-blue-500 m-auto w-28 h-28 transition-all duration-1000':!show, 'bg-red-500 rounded-full m-auto w-28 h-28 transition-all duration-1000 transform rotate-45':show}" @click="clique"></div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

    export default defineComponent({
        setup() {
            const show = ref(true);

            function clique() {
                show.value = !show.value;
            }

            return {
                show,
                clique
            }
        }
    })
</script>

<style>
    
</style>