const app = Vue.createApp({
    data() {
        return {
            taskInput: '',
            tasks: [],
            showList: true
        }
    },
    computed: {
        toggleBtnCaption() {
            return this.showList ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.taskInput);
        },
        toggleList() {
            this.showList = !this.showList;
        }
    }
});

app.mount('#assignment');