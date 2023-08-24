class Vehicle{
    constructor(name, color, price){
        this.name = name;
        this.color = color;
        this.price = price;
    }
}

const result = new Vehicle("Bus", "red",2000000);
console.log(result);

// inherit korar niyom::

class Minibus extends Vehicle{
    constructor(name, color,price, seat, ticketPrice){
        super(name, color, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}

const newBus = new Minibus(25, 120);
console.log(newBus);