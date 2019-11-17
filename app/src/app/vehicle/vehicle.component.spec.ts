import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { VehicleComponent } from './vehicle.component';
import { SharedModule } from '../shared/shared.module';
import { AppModule } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('VehicleComponent', () => {

    let component: VehicleComponent;
    let fixture: ComponentFixture<VehicleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, AppModule],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(VehicleComponent);
        component = fixture.componentInstance;
        component.vehicleUrl = 'https://swapi.co/api/vehicles/1/';
        fixture.detectChanges();
    })

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
