import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { PaginationComponent } from './pagination.component';
import { SharedModule } from '../../shared/shared.module';
import { AppModule } from '../../app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('PaginationComponent', () => {

    let component: PaginationComponent;
    let fixture: ComponentFixture<PaginationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, AppModule],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PaginationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    })

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
