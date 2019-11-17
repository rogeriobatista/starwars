import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { FilmComponent } from './film.component';
import { TestCommonModule } from '../helpers/tests/test-common.module';

describe('FilmComponent', () => {

    let component: FilmComponent;
    let fixture: ComponentFixture<FilmComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [TestCommonModule]
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
