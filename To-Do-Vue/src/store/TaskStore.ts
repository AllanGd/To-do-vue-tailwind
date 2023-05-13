import { defineStore } from "pinia";
import { ref } from "vue";
import { TarefaInterface } from "../assets/interfaces";


export const useTarefasStore = defineStore("Tarefas", () => {
  const tarefas = ref<TarefaInterface[]>([]);

  function addTarefa(tarefa: TarefaInterface) {
    tarefas.value.push(tarefa);
  }
  function removerTarefa(index:number){
    tarefas.value.splice(index,1)
  }

  return {
    tarefas, addTarefa, removerTarefa
  }
});
