import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { PersonComponent } from './person.component';
import Person from './person.model';
import { TestCommonModule } from '../helpers/tests/test-common.module';

describe('PersonComponent', () => {

    let component: PersonComponent;
    let fixture: ComponentFixture<PersonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [TestCommonModule]
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
