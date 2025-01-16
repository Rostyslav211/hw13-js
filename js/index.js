// Об'єкт account для керування особистим кабінетом інтернет-банку
const account = {
    balance: 0,
    transactions: [],

    // Метод для створення нової транзакції
    createTransaction(amount, type) {
        return {
            id: this.transactions.length + 1,
            amount,
            type
        };
    },

    // Метод для додавання транзакції
    addTransaction(transaction) {
        this.transactions.push(transaction);
    },

    // Метод для поповнення балансу
    deposit(amount) {
        if (amount <= 0) {
            console.log("Сума повинна бути більше нуля.");
            return;
        }

        const transaction = this.createTransaction(amount, "deposit");
        this.addTransaction(transaction);
        this.balance += amount;
        console.log(`Баланс поповнено на ${amount}. Поточний баланс: ${this.balance}`);
    },

    // Метод для зняття коштів
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Сума повинна бути більше нуля.");
            return;
        }

        if (amount > this.balance) {
            console.log("Недостатньо коштів на рахунку.");
            return;
        }

        const transaction = this.createTransaction(amount, "withdraw");
        this.addTransaction(transaction);
        this.balance -= amount;
        console.log(`Знято ${amount}. Поточний баланс: ${this.balance}`);
    },

    // Метод для отримання балансу
    getBalance() {
        console.log(`Поточний баланс: ${this.balance}`);
        return this.balance;
    },

    // Метод для отримання транзакції за ID
    getTransactionDetails(id) {
        const transaction = this.transactions.find(t => t.id === id);

        if (!transaction) {
            console.log(`Транзакція з ID ${id} не знайдена.`);
            return null;
        }

        console.log(`Деталі транзакції:`, transaction);
        return transaction;
    },

    // Метод для підрахунку загальної суми транзакцій певного типу
    getTransactionTotal(type) {
        const total = this.transactions
            .filter(t => t.type === type)
            .reduce((sum, t) => sum + t.amount, 0);

        console.log(`Загальна сума для типу "${type}": ${total}`);
        return total;
    }
};
