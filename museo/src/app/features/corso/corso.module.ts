import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorsoComponent } from './main/corso.component';
import { CorsoRoutingModule } from './corso-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CorsoComponent],
  imports: [
    CommonModule,
    SharedModule,
    CorsoRoutingModule,
  ],
  exports: [CorsoComponent],
  bootstrap: [CorsoComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class CorsoModule { }
