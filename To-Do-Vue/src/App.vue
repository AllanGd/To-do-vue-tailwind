<template>
  <form class="bg-gray-200 pb-5 drop-shadow-lg" @submit.prevent="store.addTarefa(novaTarefa)">
    <div class="container mx-auto p-1">
      <div class="mt-4 grid gap-3 md:grid-cols-3 lg:grid-cols-6">
        <input type="text" name="" v-model="novaTarefa.descricao"
          class="md:col-span-3 border-2 border-gray-300 bg-gray-100 p-1 text-lg text-gray-500 outline-none max-lg:rounded-t-md lg:rounded-l-md"
          placeholder="Digite aqui" id="" />
        <input type="date" v-model="novaTarefa.data" name=""
          class="col-span-1 border-2 border-gray-300 bg-gray-100 p-1 text-lg text-gray-500 outline-none md:rounded-bl-md lg:rounded-none"
          id="" />
          <button type="submit"
          class="col-span-1 border-2 border-gray-300 bg-gray-300 p-1 text-lg font-bold hover:bg-gray-400 active:bg-gray-500 max-md:rounded-b-md md:col-span-2 md:rounded-br-md lg:rounded-r-md"
          >Adicionar</button>
      </div>
    </div>
  </form>
  <div class="container mx-auto p-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-5 pt-5">
    <div v-for="(tarefa, index) in store.tarefas" :key="index">
      <tarefaCard :tarefa="tarefa"/>
    </div>
  </div>
</template>

<style scoped></style>
<script setup lang="ts">
import tarefaCard from './components/Tarefa.vue'
import {useTarefasStore} from './store/TaskStore'
import { TarefaInterface } from './assets/interfaces';
import { ref } from 'vue';

const store = useTarefasStore();

const novaTarefa = ref<TarefaInterface>({
  descricao: "",
  data: "",
  concluido: false
});
</script>