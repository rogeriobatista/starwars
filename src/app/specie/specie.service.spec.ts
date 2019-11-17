import { TestBed, async, inject } from '@angular/core/testing';
import SpecieService from './specie.service';
import { SharedModule } from '../shared/shared.module';
import { AppModule } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('SpecieService', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, AppModule],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' },
                SpecieService
            ]
        }).compileComponents();
    }));

    it('should be created', inject([SpecieService], (service: SpecieService) => {
        expect(service).toBeTruthy();
    }))

    it('should has get method', inject([SpecieService], (service: SpecieService) => {
        expect(service.get).toBeTruthy();
    }))

    it('should get Specie with name Human', inject([SpecieService], (service: SpecieService) => {
        service.get('https://swapi.co/api/species/1/').subscribe(response => {
            expect(response.name).toEqual('Human');
        })
    }))
});
