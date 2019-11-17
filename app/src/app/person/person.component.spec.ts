import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { PersonComponent } from './person.component';
import { SharedModule } from '../shared/shared.module';
import { AppModule } from '../app.module';
import Person from './person.model';
import { APP_BASE_HREF } from '@angular/common';

describe('PersonComponent', () => {

    let component: PersonComponent;
    let fixture: ComponentFixture<PersonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, AppModule],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PersonComponent);
        component = fixture.componentInstance;
        component.person = new Person();
        fixture.detectChanges();
    })

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
