<template>
    <div>
        <h1>Todo List</h1>
        <form @submit.prevent="addTask">
            <input type="text" v-model="newTask" placeholder="Tambahkan tugas baru" required />
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