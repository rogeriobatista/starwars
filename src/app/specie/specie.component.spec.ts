import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { SpecieComponent } from './specie.component';
import { SharedModule } from '../shared/shared.module';
import { AppModule } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';
import Specie from './specie.model';

describe('SpecieComponent', () => {

    let component: SpecieComponent;
    let fixture: ComponentFixture<SpecieComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, AppModule],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SpecieComponent);
        component = fixture.componentInstance;
        component.specie = new Specie();
        fixture.detectChanges();
    })

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
