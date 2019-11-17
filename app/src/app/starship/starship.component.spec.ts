import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { StarshipComponent } from './starship.component';
import { SharedModule } from '../shared/shared.module';
import { AppModule } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('StarshipComponent', () => {

    let component: StarshipComponent;
    let fixture: ComponentFixture<StarshipComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, AppModule],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
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
