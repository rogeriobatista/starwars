import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { PlanetComponent } from './planet.component';
import { Planet } from './planet.model';
import { TestCommonModule } from '../helpers/tests/test-common.module';

describe('PlanetComponent', () => {

    let component: PlanetComponent;
    let fixture: ComponentFixture<PlanetComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [TestCommonModule]
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
