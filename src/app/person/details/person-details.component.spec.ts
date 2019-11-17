import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { PersonDetailsComponent } from './person-details.component';
import { TestCommonModule } from 'src/app/helpers/tests/test-common.module';

describe('PersonDetailsComponent', () => {

    let component: PersonDetailsComponent;
    let fixture: ComponentFixture<PersonDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [TestCommonModule]
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
