const app = Vue.createApp({
    data() {
        return {
            output: '',
            outputOnkeyDown: ''
        }
    },
    methods: {
        showAlert() {
            alert("Button Pressed");
        },
        showOutput(event) {
            this.output = event.target.value;
        },
        showOutputOnkeyDown(){
            this.outputOnkeyDown = this.output;
        }
    }
});

app.mount('#assignment');