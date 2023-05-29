<script setup>
</script>

<template>
  <div id="app" class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center">
    <div class="container">
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

