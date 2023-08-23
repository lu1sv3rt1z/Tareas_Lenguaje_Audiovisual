class ItemStoreGetter {
    getAllItemsByReleasedDate(date: string, items: VideoGame[]) {
        return items.filter((item) => item.getReleaseDate() === date);
    }

    getAllItemsPerPrice(price: number, items: VideoGame[]) {
        return items.filter((item) => item.getPrice() === price);
    }

    getAllItemsHigherPrice(price: number, items: VideoGame[]) {
        return items.filter((item) => item.getPrice() > price);
    }
}

class BetterVideoGameStore extends ItemStoreGetter {
    private videoGames: VideoGame[];
    constructor(videoGames: VideoGame[]) {
        super();
        this.videoGames = videoGames;
    }
}

class VideoGameStore {
    private videoGames: VideoGame[];

    getAllGamesByReleasedDate(date: string) {
        return this.videoGames.filter((game) => game.getReleaseDate() === date);
    }

    getAllGamesPerPrice(price: number) {
        return this.videoGames.filter((game) => game.getPrice() === price);
    }

    getAllGamesHigherPrice(price: number) {
        return this.videoGames.filter((game) => game.getPrice() > price);
    }
}

class VideoGame {
    private name: string;
    private price: number;
    private releaseDate: string;

    constructor(name: string, price: number, releaseDate: string) {
        this.name = name;
        this.price = price;
        this.releaseDate = releaseDate;
    }

    public getName(): string {
        return this.name;
    }
    public setName(nameNew: string) {
        return this.name = nameNew;
    }
    public getPrice(): number {
        return this.price;
    }
    public getReleaseDate(): string {
        return this.releaseDate;
    }
}