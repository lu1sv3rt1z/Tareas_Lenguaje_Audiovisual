interface Room {
    paint: string;
    showRoom(): void;
}

class BasicRoom implements Room {
    paint: string;

    constructor(paint: string) {
        this.paint = paint;
    }

    showRoom() {
        console.log(`This room is painted with ${this.paint}.`);
    }
}

class DesignDecorator implements Room {
    room: Room;
    design: string;

    constructor(room: Room, design: string) {
        this.room = room;
        this.design = design;
    }

    showRoom() {
        this.room.showRoom();
        console.log(`It has a ${this.design} design.`);
    }
}

// Uso
const myBasicRoom: Room = new BasicRoom('blue');
const myRoomWithDesign: Room = new DesignDecorator(myBasicRoom, 'stripe');
myRoomWithDesign.showRoom();
