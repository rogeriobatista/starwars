import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { VehicleComponent } from './vehicle.component';
import { TestCommonModule } from '../helpers/tests/test-common.module';

describe('VehicleComponent', () => {

    let component: VehicleComponent;
    let fixture: ComponentFixture<VehicleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [TestCommonModule]
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
