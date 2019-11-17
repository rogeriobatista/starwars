import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { PlanetComponent } from './planet.component';
import { SharedModule } from '../shared/shared.module';
import { AppModule } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';
import { Planet } from './planet.model';

describe('PlanetComponent', () => {

    let component: PlanetComponent;
    let fixture: ComponentFixture<PlanetComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, AppModule],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlanetComponent);
        component = fixture.componentInstance;
        component.planet = new Planet();
        fixture.detectChanges();
    })

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
