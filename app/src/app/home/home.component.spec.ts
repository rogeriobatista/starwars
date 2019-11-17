import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { AppModule } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('HomeComponent', () => {

    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, AppModule],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        component.currentPage = 1;
        component.breadcrumbCurrentPage = '';
        fixture.detectChanges();
    })

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
