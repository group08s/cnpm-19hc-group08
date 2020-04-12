import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { service } from '../core/services';
import { pageService } from './services';
import { components } from './component';
import { pageContainer } from './page';
import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module';
import { ErrorComponent } from './page/error/error.component';
import { HttpClientModule } from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
    declarations: [...components, ...pageContainer, PageComponent, ErrorComponent],
    imports: [
        CommonModule,
        PageRoutingModule,
        HttpClientModule,
        // HttpClientInMemoryWebApiModule
    ],
    providers: [...pageService],
    exports: [
        PageComponent
    ]
})
export class PageModule {}
