import { defineStore } from "pinia";
import { ref } from "vue";
import { TarefaInterface } from "../assets/interfaces";

export const useTarefasStore = defineStore("Tarefas", () => {
  const tarefas = ref<TarefaInterface[]>([]);

  function addTarefa(tarefa: TarefaInterface) {
    tarefas.value.push(tarefa);
  }

  function deleteTarefa(id: string) {
    tarefas.value = tarefas.value.filter((tarefa) => tarefa.id !== id);
  }

  return {
    tarefas,
    addTarefa,
    deleteTarefa,
  };
});
