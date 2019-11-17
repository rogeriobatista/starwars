import { NgModule } from '@angular/core';

import { AppModule } from 'src/app/app.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
    imports: [
        AppModule,
        SharedModule
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
    ]
})
export class TestCommonModule { }