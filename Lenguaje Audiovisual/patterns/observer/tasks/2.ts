interface Observer{
    update(item:string, currentBid:number, highestBidder: string);
}
class Auction implements Observer {
    update(item: string, currentBid:number, highestBidder: string) {
        if (highestBidder === currentBid) {
            console.log('Is the most High Price!');
        }
    }

    makeBid(bidderName: string, amount: number) {
        if (amount > this.currentBid) {
            this.currentBid = amount;
            this.highestBidder = bidderName;
            console.log(`${bidderName} es el máximo postor con una oferta de ${amount}`);
        } else {
            console.log(`${bidderName}, tu oferta es demasiado baja.`);
        }
    }
}

const auctionItem = new Auction("Cuadro famoso");
auctionItem.makeBid("Carlos", 500);
auctionItem.makeBid("Ana", 450);

