const { createApp } = Vue;

createApp({
    data() {
        return {
            message: "Esempio di git workflow",
            click: 0,
            text: ''
        }
    },
    methods: {
        countClick() {
            this.count++;
        }
    }

}).mount('#app');