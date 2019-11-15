import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Vehicle } from './vehicle.model';
import VehicleService from './vehicle.service';

@Component({
    selector: 'app-vehicle',
    templateUrl: './vehicle.component.html',
    styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {

    @Input() vehicleUrl: string;
    vehicle: Vehicle = new Vehicle();
    isMenuCollapsed = true;

    constructor(private vehicleService: VehicleService) { }

    ngOnInit(): void {
        this.vehicleService.get(this.vehicleUrl).subscribe(response => {
            this.vehicle = response;
        })
    }
}
