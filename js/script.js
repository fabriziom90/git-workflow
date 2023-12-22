const { createApp } = Vue;

createApp({
    data() {
        return {
            message: "Esempio di git workflow",
            count: 0,
            text: '',
            color: 'red'
        }
    },
    methods: {
        countClick() {
            this.count++;
        },
        toggleColor() {
            if (this.color == 'red') {
                this.color = 'blue'
            }
            else {
                this.color = 'red'
            }
        }
    }

}).mount('#app');