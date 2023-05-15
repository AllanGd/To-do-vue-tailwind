<template>
  <div class="grid-col-3 grid gap-1">
    <div class="col-span-3 grid grid-cols-2 rounded-t-md border-2 border-gray-300 bg-gray-100 p-2 text-lg text-gray-500">
      <span class="col-span-2 row-span-2 mt-2 h-24">{{ tarefa.descricao }}</span>
      <span class="self-end text-base">Prazo: {{ dataFormatada() }}</span>
      <span class="self-end text-base font-bold text-orange-600 justify-self-end">Próximo do vencimento</span>
    </div>
    <button
      class="col-span-1 rounded-bl-md drop-shadow-md bg-emerald-400 p-1 text-lg font-bold hover:bg-emerald-500 active:bg-emerald-600">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="inline h-6 w-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      Concluir
    </button>
    <button class="col-span-1 bg-sky-400 p-1 drop-shadow-md text-lg font-bold hover:bg-sky-500 active:bg-sky-600">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="inline h-6 w-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
      Editar
    </button>
    <button @click="removerTarefa"
      class="col-span-1 rounded-br-md bg-red-400 drop-shadow-md p-1 text-lg font-bold hover:bg-red-500 active:bg-red-600">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="inline h-6 w-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
      Remover
    </button>
  </div>
</template>
<script setup lang="ts">
import { TarefaInterface } from '../assets/interfaces';
import { useTarefasStore } from '../store/TaskStore';


const props = defineProps({
  tarefa: {
    type: Object as () => TarefaInterface,
    required: true
  }
});

const tarefasStore = useTarefasStore();
const removerTarefa = () => {
  tarefasStore.deleteTarefa(props.tarefa.id);
};
const dataFormatada = () => props.tarefa.data?.split("-").reverse().join("/");
</script>
