<script setup>
</script>

<template>
  <div id="app" class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center">
    <div class="bg-white shadow rounded-lg m-4 p-4 sm:p-6 h-full">
      <TodoList />
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    TodoList,
  },
};
</script>

