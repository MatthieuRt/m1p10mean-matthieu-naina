import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { CompactComponent } from 'app/modules/admin/pages/invoice/printable/compact/compact.component';
import { compactRoutes } from 'app/modules/admin/pages/invoice/printable/compact/compact.routing';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CompactComponent
    ],
    imports     : [
        RouterModule.forChild(compactRoutes),
        CdkScrollableModule,
        CommonModule
    ]
})
export class CompactModule
{
}
