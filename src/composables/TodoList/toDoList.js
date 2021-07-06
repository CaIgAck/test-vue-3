import { ref } from "vue";

export function toDoListComposables() {
  const taskList = ref([]);
  const task = ref("");
  const addTask = () => {
    taskList.value.push(task.value);
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
