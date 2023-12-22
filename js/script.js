const { createApp } = Vue;

createApp({
    data() {
        return {
            message: "Esempio di git workflow",
            count: 0,
            text: '',
            color: 'red',
            num1: null,
            num2: null,
            result: null
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
        },
        multiplyNumbers() {
            if (isNaN(this.num1) || isNaN(this.num2)) {
                alert("Inserisci 2 numeri");
            } else {
                this.result = this.num1 * this.num2;
                return this.result;
            }
        }
    }
}).mount('#app');