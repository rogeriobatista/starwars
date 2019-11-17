import { TestBed, async, inject } from '@angular/core/testing';
import GoogleImageSearchService from './google-images.service';
import { TestCommonModule } from '../../helpers/tests/test-common.module';

describe('GoogleImageSearchService', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [TestCommonModule],
            providers: [
                GoogleImageSearchService
            ]
        }).compileComponents();
    }));

    it('should be created', inject([GoogleImageSearchService], (service: GoogleImageSearchService) => {
        expect(service).toBeTruthy();
    }))

    it('should has get method', inject([GoogleImageSearchService], (service: GoogleImageSearchService) => {
        expect(service.searchImage).toBeTruthy();
    }))

    it('should get images by name passed', inject([GoogleImageSearchService], (service: GoogleImageSearchService) => {
        service.searchImage('Millennium Falcon').then((images: any[]) => {
            expect(images.length).toBeGreaterThan(0);
        })
    }))
});
