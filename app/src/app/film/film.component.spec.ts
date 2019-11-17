import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { FilmComponent } from './film.component';
import { SharedModule } from '../shared/shared.module';
import { AppModule } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('FilmComponent', () => {

    let component: FilmComponent;
    let fixture: ComponentFixture<FilmComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, AppModule],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FilmComponent);
        component = fixture.componentInstance;
        component.filmUrl = 'https://swapi.co/api/films/1/';
        fixture.detectChanges();
    })

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
