class TodoManager {
    private todos: string[] = [];
    private storage: string = "todos";

    add(todo: string) {
        // this.todos.push(todo);
        // this.save();
        // this.render();
        this.todos.push(todo);
        this.save();
        this.render();
    }

    remove(index: number) {
        // this.todos.splice(index, 1);
        // this.save();
        // this.render();
        this.todos.splice(index, 1);
        this.save();
        this.render();
    }

    getTodos(): string[] {
        return [...this.todos];
    }


    private save() {
        console.log("Saving todos to local storage...");
        // Código para guardar todos en el almacenamiento local
        localStorage.setItem(this.storage, JSON.stringify(this.todos));
        this.render();
    }

    private loadbd() {
        console.log("Loading todos from local storage...");
        const storedTodos = localStorage.getItem(this.storage);
        if (storedTodos) {
            this.todos = JSON.parse(storedTodos);
        }
        this.render();
    }

    private render() {
        console.log("Rendering todos in the UI...");
        // Código para renderizar todos en la UI
    }
}
