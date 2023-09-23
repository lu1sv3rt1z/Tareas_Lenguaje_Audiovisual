// Define una interfaz Observer que deben implementar los observadores
interface Observer {
    update(data: any): void;
}

class Journalist {
    private observers: Observer[] = [];
    name: string;
    articles: string[] = [];

    constructor(name: string) {
        this.name = name;
    }


    addObserver(observer: Observer) {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    publishArticle(article: string) {
        this.articles.push(article);
        console.log(`El periodista ${this.name} ha publicado: ${article}`);
        this.notifyObservers(article);
    }

    private notifyObservers(article: string) {
        this.observers.forEach(observer => {
            observer.update(article);
        });
    }
}

class Reader implements Observer {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(article: string) {
        console.log(`${this.name} ha leído el artículo: ${article}`);
    }
}


const journalistA = new Journalist('Juan');
const readerB = new Reader('Ana');

journalistA.addObserver(readerB);

journalistA.publishArticle("Los beneficios de la programación");
