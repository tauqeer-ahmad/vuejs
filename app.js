const app = Vue.createApp({
    data() {
        return {
            myName: "Yasir",
            myAge: 24,
            imageUrl: "https://xprolabs.com/assets/logo-56ba1c0eb664802e32a79198fd8a8e2c83dba2c2fada2b0c4b2389e43321e577.svg"
        }
    },
    methods: {
        showRandom(){
            return Math.random();
        },
        showName(){
            return this.myName;
        }
    }
});

app.mount('#assignment');