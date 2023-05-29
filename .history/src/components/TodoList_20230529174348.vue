<template>
    <div>
        <div class="flex justify-between bg-white mb-8 p-4 rounded-lg">
            <h1>Todo List</h1>
            <button type="submit" @click="addTask">Tambah</button>
        </div>
        <div class="bg-gray-200">
            <ul>
                <li v-for="(task, index) in tasks" :key="index">
                    <div class="p-4 bg-white rounded-lg mb-4">
                        <h1>{{ task.title }}</h1>
                        <p class="text-gray-600">{{ task.description }}</p>
                        <p class="text-blue-400">{{ task.assignee }}</p>
                        <div class="flex">
                            <button class="mr-2" @click="editTask(task)">Edit</button>
                            <button class="mr-2" @click="deleteTask(index)">Hapus</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            // newTask: '',
            newTask: {
                id: Date.now().toString(),
                title: '<<title>>',
                description: '<<description>>',
                assignee: 'assignee'
            }
        };
    },
    computed: {
        tasks() {
            return this.$store.state.tasks;
        },
    },
    methods: {
        addTask() {
            if (this.newTask) {
                this.$store.commit('addTask', this.newTask);
            }
        },
        deleteTask(index) {
            this.$store.commit('deleteTask', index);
        },
    },
};
</script>