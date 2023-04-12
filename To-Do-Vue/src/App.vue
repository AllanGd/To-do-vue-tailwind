<script setup lang="ts">
import Tarefa from '../src/components/Tarefa.vue'
</script>

<template>
  <div class="flex items-center justify-center -space-x-1 pt-4">
    <input type="text" value="" placeholder="Digite sua tarefa aqui"
      class="rounded-l-md border-2 border-emerald-200 bg-green-50 p-2 font-medium text-slate-600 placeholder-slate-400 focus:bg-green-100 focus:outline-none" />
    <span
      class="border-2 border-emerald-200 bg-emerald-100 p-2 hover:bg-emerald-200 focus:border-emerald-600 focus:bg-emerald-300">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="h-6 w-6 text-green-600">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </span>
    <input type="button"
      class="rounded-r-md border-2 border-emerald-200 bg-emerald-200 p-2 font-semibold text-green-700 hover:bg-emerald-300 focus:border-emerald-600 focus:bg-emerald-300"
      value="Adicionar" />
    </div>
    <Tarefa></Tarefa>
  </template>

<style scoped></style>
