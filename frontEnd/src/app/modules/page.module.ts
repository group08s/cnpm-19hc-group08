import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { service } from '../core/services';
import { pageService } from './services';
import { components } from './component';
import { pageContainer } from './page';
import { PageRoutingModule } from './page-routing.module';

@NgModule({
    declarations: [...components, ...pageContainer],
    imports: [
        CommonModule,
        PageRoutingModule,
    ],
    providers: [...pageService],
    exports: [
    ]
})
export class PageModule {}
