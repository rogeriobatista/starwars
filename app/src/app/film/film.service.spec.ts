import { TestBed, async, inject } from '@angular/core/testing';
import FilmService from './film.service';
import { SharedModule } from '../shared/shared.module';
import { AppModule } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('FilmService', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, AppModule],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' },
                FilmService
            ]
        }).compileComponents();
    }));

    it('should be created', inject([FilmService], (service: FilmService) => {
        expect(service).toBeTruthy();
    }))

    it('should has get method', inject([FilmService], (service: FilmService) => {
        expect(service.get).toBeTruthy();
    }))

    it('should get Film with name A New Hope', inject([FilmService], (service: FilmService) => {
        service.get('https://swapi.co/api/films/1/').subscribe(response => {
            expect(response.name).toEqual('A New Hope');
        })
    }))
});
