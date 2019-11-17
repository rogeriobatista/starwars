import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { SharedModule } from '../../shared/shared.module';
import { AppModule } from '../../app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('SearchComponent', () => {

    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, AppModule],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    })

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
