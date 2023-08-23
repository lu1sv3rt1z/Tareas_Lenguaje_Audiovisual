class Item {
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

class VideoGameOC extends Item {
    private genre: string;
    constructor(name: string, price: number, releaseDate: string, genre: string) {
        super(name, price, releaseDate);
        this.genre = genre;
    }

    public getGenre(): string {
        return this.genre;
    }
    public setGenre(genreNew: string) {
        return this.genre = genreNew;
    }
}

class Movie extends Item {
    private director: string;
    private duration: string;
    

    constructor(name: string, price: number, releaseDate: string, director: string, duration: string) {
        super(name, price, releaseDate);
        this.director = director;
        this.duration = duration;
    }

    public getDirector(): string{
        return this.director;
    }

    public getDuration(): string{
        return this.duration;
    }

}

class VideoGameMoviesStore extends ItemStoreGetter{
    private videoGames: VideoGameOC[];
    private movies: Movie[];
    constructor(videoGames: VideoGameOC[], movies: Movie[]) {
        super();
        this.videoGames = videoGames;
        this.movies = movies;
    }
}

//////////////////////////////////////////////////////

class MovieStore{
    private movies: Movie[];

    constructor(movies: Movie[]){
        this.movies = this.movies;

    }

    getByDirector(director: string, items: Movie[]){
        return items.filter((item) => item.getDirector() === director);
    }

    getByDuration(duration:string, items: Movie[]){
        return items.filter((item) => item.getDuration() === duration);
    }

    getDirectorandDuration(director:string, duration:string, items: Movie[] ){
        return this.getDirectorandDuration(director,duration,items).filter((item) => item.getDuration === duration)
        .map((item) => (director + duration))

    }
}

class VideoGameStoreWithoutMovioes extends MovieStore{
    private videoGames: VideoGameOC[];

    constructor(videoGames: VideoGameOC[],movies: Movie[]){
        super(movies);
        this.videoGames = videoGames;
    }

    getGameByGenere(genre: string, items: VideoGameOC[]){
        return items.filter((item) => item.getGenre() === genre);
    }
}