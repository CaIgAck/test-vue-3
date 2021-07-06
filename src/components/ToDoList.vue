<template>
  <div class="card_contain">
    <div class="card">
      <div class="card-header">To Do List</div>
      <div style="margin-top: 10px; margin-left: 10px">
        <label for="name" class="form__label">Name</label><br />
        <input
          type="input"
          class="form__field"
          placeholder="Name"
          name="name"
          id="name"
          required
          v-model="task"
        />
      </div>
      <button style="margin-top: 10px" @click="addTask">Добавить задачу</button>
      <div class="content">
        <div class="task" v-for="(task, index) in taskList" :key="index">
          {{ task }}

          <button @click="removeTask(index)">удалить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toDoListComposables } from "../composables/TodoList/toDoList";
export default {
  name: "ToDoList",
  setup() {
    const { taskList, task, addTask, removeTask } = toDoListComposables();
    return {
      task,
      taskList,
      addTask,
      removeTask,
    };
  },
};
</script>

<style scoped>
.card_contain {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 900px;
}
.card {
  border: 2px solid #e3a6e6;
  height: 300px;
  width: 300px;
  box-shadow: 0 0 10px #e3a6e6;
}
.card-header {
  margin-top: 10px;
  margin-left: 10px;
  font-weight: bold;
  font-size: 20px;
}
</style>
