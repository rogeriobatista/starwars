import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { PersonDetailsComponent } from './person-details.component';
import { SharedModule } from '../../shared/shared.module';
import { AppModule } from '../../app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('PersonDetailsComponent', () => {

    let component: PersonDetailsComponent;
    let fixture: ComponentFixture<PersonDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, AppModule],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PersonDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    })

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
