export class Vehicle {
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    created: Date;
    crew: string;
    edited: Date;
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    model: string;
    name: string;
    passengers: string;
    pilots: [];
    films: [];
    url: string;
    vehicle_class: string;

    constructor() {
        this.name = '';
    }
}