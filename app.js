const app = Vue.createApp({
    data() {
        return {
            className: '',
            backgroundColor: '',
            paragraphVisibilty: true
        }
    },
    computed: {
        addClass() {
            return {
                user1: this.className === 'user1',
                user2: this.className === 'user2',
                visible: this.paragraphVisibilty,
                hidden: !this.paragraphVisibilty
            };
        },
        addBackgroundColor() {
            return this.backgroundColor;
        }
    },
    methods: {
        toggleParagraph() {
            this.paragraphVisibilty = !this.paragraphVisibilty;
        }
    }
});

app.mount('#assignment');