const app = Vue.createApp({
    data() {
        return {
            counter: 0
        }
    },
    computed: {
        showResult() {
            if (this.counter < 37) {
                return "Not there yet";
            }
            else if (this.counter > 37) {
                return "Too much!";
            }
            else if (this.counter === 37) {
                return 37;
            }
        }
    },
    watch: {
        showResult() {
            console.log("Watcher executing...");
            const that = this;
            setTimeout(function () {
                that.counter = 0;
            }, 5000);
        }

    },
    methods: {
        addFive() {
            this.counter = this.counter + 5;
        },
        addOne() {
            this.counter = this.counter + 1;
        }
    }
});

app.mount('#assignment');