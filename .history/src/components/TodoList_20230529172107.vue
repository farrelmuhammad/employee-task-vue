<template>
    <div>
        <h1>Todo List</h1>
        <form @submit.prevent="addTask">
            <button type="submit">Tambah</button>
        </form>
        <ul>
            <li v-for="(task, index) in tasks" :key="index">
                {{ task }}
                <button @click="deleteTask(index)">Hapus</button>
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            // newTask: '',
            newTask: {}
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
                this.newTask = {
                    id: Date.now().toString(),
                    title: '<<title>>',
                    description: '<<description>>',
                    assignee: 'assignee'
                };
            }
        },
        deleteTask(index) {
            this.$store.commit('deleteTask', index);
        },
    },
};
</script>