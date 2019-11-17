import { TestBed, async, inject } from '@angular/core/testing';
import StarshipService from './starship.service';
import { SharedModule } from '../shared/shared.module';
import { AppModule } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('StarshipService', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, AppModule],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' },
                StarshipService
            ]
        }).compileComponents();
    }));

    it('should be created', inject([StarshipService], (service: StarshipService) => {
        expect(service).toBeTruthy();
    }))

    it('should has get method', inject([StarshipService], (service: StarshipService) => {
        expect(service.get).toBeTruthy();
    }))

    it('should get Starship with name Millennium Falcon', inject([StarshipService], (service: StarshipService) => {
        service.get('https://swapi.co/api/starships/10/').subscribe(response => {
            expect(response.name).toEqual('Millennium Falcon');
        })
    }))
});
