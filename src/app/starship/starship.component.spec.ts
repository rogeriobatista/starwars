import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { StarshipComponent } from './starship.component';
import { TestCommonModule } from '../helpers/tests/test-common.module';

describe('StarshipComponent', () => {

    let component: StarshipComponent;
    let fixture: ComponentFixture<StarshipComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [TestCommonModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StarshipComponent);
        component = fixture.componentInstance;
        component.starshipUrl = 'https://swapi.co/api/starships/9/';
        fixture.detectChanges();
    })

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
