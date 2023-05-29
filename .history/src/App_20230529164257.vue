<script setup>
</script>

<template>
  <div id="app" class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center">
    <div class="bg-blue-500 p-4 border-t-4 border-blue-600">
      <p class="text-white">Isi konten kotak Anda di sini</p>
    </div>
    <TodoList />
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

