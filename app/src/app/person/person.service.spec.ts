import { TestBed, async, inject } from '@angular/core/testing';
import PersonService from './person.service';
import { SharedModule } from '../shared/shared.module';
import { AppModule } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('PersonService', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, AppModule],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' },
                PersonService
            ]
        }).compileComponents();
    }));

    it('should be created', inject([PersonService], (service: PersonService) => {
        expect(service).toBeTruthy();
    }))

    it('should has get method', inject([PersonService], (service: PersonService) => {
        expect(service.get).toBeTruthy();
    }))

    it('should get Person with name Luke Skywalker', inject([PersonService], (service: PersonService) => {
        service.getById(1).subscribe(response => {
            expect(response.name).toEqual('Luke Skywalker');
        })
    }))

    it('should get page with 10 people', inject([PersonService], (service: PersonService) => {
        service.get(1).subscribe(response => {
            expect(response.results.length).toBe(10);
        })
    }))

    it('should get person with name contains Leia', inject([PersonService], (service: PersonService) => {
        service.search('Leia').subscribe(response => {
            expect(response.count).toBe(1);
            expect(response.results[0].name).toEqual('Leia Organa');
        })
    }))
});
