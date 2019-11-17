import { TestBed, async, inject } from '@angular/core/testing';
import VehicleService from './vehicle.service';
import { TestCommonModule } from '../helpers/tests/test-common.module';

describe('VehicleService', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [TestCommonModule],
            providers: [
                VehicleService
            ]
        }).compileComponents();
    }));

    it('should be created', inject([VehicleService], (service: VehicleService) => {
        expect(service).toBeTruthy();
    }))

    it('should has get method', inject([VehicleService], (service: VehicleService) => {
        expect(service.get).toBeTruthy();
    }))

    it('should get Vehicle with name Sand Crawler', inject([VehicleService], (service: VehicleService) => {
        service.get('https://swapi.co/api/vehicles/4/').subscribe(response => {
            expect(response.name).toEqual('Sand Crawler');
        })
    }))
});
