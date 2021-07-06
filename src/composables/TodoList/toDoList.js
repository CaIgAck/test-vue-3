import { ref } from "vue";

export function toDoListComposables() {
  const taskList = ref([]);
  const task = ref("");
  const clearTask = () => {
    task.value = "";
  };
  const addTask = () => {
    if (task.value) {
      taskList.value.push(task.value);
      clearTask();
    }
  };
  const removeTask = (index) => {
    taskList.value.splice(index, 1);
  };
  return {
    addTask,
    task,
    taskList,
    removeTask,
  };
}
