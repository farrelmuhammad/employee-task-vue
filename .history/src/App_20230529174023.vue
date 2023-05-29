<script setup>
</script>

<template>
  <div id="app" class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center items-stretch py-8">
    <div class="rounded-lg sm:p-6 w-2/5">
      <TodoList />
    </div>
    <!-- <div class="bg-white shadow rounded-lg m-4 p-4 sm:p-6 h-full">
      <div class="flex flex-col">
        <div class="overflow-x-auto">
          <div class="align-middle inline-block min-w-full">
            <div class="shadow overflow-hidden">
            </div>
          </div>
        </div>
      </div>
    </div> -->
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

