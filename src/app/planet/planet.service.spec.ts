import { TestBed, async, inject } from '@angular/core/testing';
import PlanetService from './planet.service';
import { TestCommonModule } from '../helpers/tests/test-common.module';

describe('PlanetService', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [TestCommonModule],
            providers: [PlanetService]
        }).compileComponents();
    }));

    it('should be created', inject([PlanetService], (service: PlanetService) => {
        expect(service).toBeTruthy();
    }))

    it('should has get method', inject([PlanetService], (service: PlanetService) => {
        expect(service.get).toBeTruthy();
    }))

    it('should get Planet with name Tatooine', inject([PlanetService], (service: PlanetService) => {
        service.get('https://swapi.co/api/planets/1/').subscribe(response => {
            expect(response.name).toEqual('Tatooine');
        })
    }))
});
