<script setup lang="ts">
import Tarefa from '../src/components/Tarefa.vue'
</script>

<template>
  <div class="flex items-center justify-center pt-4">
    <input type="text" value="" placeholder="Digite sua tarefa aqui"
      class="h-11 w-2/4 rounded-l-md border-2 border-emerald-200 bg-emerald-50 p-2 font-medium text-slate-600 placeholder-slate-400 focus:bg-green-100 focus:outline-none" />
    <input type="date"
      class="h-11 border-2 border-emerald-200 bg-emerald-50 p-2 text-slate-600 hover:border-emerald-300 hover:bg-emerald-200 focus:border-emerald-600 focus:bg-emerald-300"
      name="" id="" />
    <input type="button"
      class="h-11 rounded-r-md border-2 border-emerald-200 bg-emerald-200 p-2 font-semibold text-green-700 hover:bg-emerald-300 focus:border-emerald-600 focus:bg-emerald-300"
      value="Adicionar" />
  </div>
  <Tarefa></Tarefa>
  </template>

<style scoped></style>
