<template>
  <div class="card_contain">
    <div class="card">
      <div style="margin-top: 10px; margin-left: 10px">
        <input
          type="input"
          class="form__field"
          placeholder="Задача"
          name="name"
          id="name"
          required
          v-model="task"
        />
      </div>
      <button
        style="margin-top: 10px; margin-left: 10px"
        @click="addTask"
        class="custom-btn btn-11"
      >
        Добавить задачу
      </button>
    </div>
    <div class="content" v-if="taskList.length > 0">
      <div class="task" v-for="(task, index) in taskList" :key="index">
        <div>{{ task }}</div>
        <div>
          <button @click="removeTask(index)" class="custom-btn btn-small-11">
            Удалить
          </button>
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

<style>
.card_contain {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 900px;
  flex-direction: column;
}
.card {
  border: 2px solid #e3a6e6;
  height: 150px;
  width: 300px;
  box-shadow: 0 0 10px #e3a6e6;
}
.form__field {
  width: 265px;
  height: 40px;
  font-size: 18px;
  padding-left: 10px;
  border: 2px solid black;
}
.content {
  margin-top: 20px;
  border: 2px solid #e3a6e6;
  width: 500px;
  box-shadow: 0 0 10px #e3a6e6;
}
.task {
  font-size: 16px;
  font-weight: bold;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.task:hover {
  background-color: #e3a6e6;
}
.btn-11 {
  overflow: hidden;
  transition: all 0.3s ease;
}
.btn-11:hover {
  background: #000;
  color: #fff;
}
.btn-small-11:hover {
  background: #a3e0e6;
}
.btn-small-11 {
  overflow: hidden;
  transition: all 0.3s ease;
}
.btn-11:before {
  position: absolute;
  content: "";
  display: inline-block;
  top: -180px;
  left: 0;
  width: 30px;
  height: 100%;
  background-color: #fff;
  animation: shiny-btn1 3s ease-in-out infinite;
}
.custom-btn {
  font-weight: bold;
  width: 170px;
  height: 40px;
  padding: 10px 25px;
  border: 2px solid #000;
  font-family: "Lato", sans-serif;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}
</style>
