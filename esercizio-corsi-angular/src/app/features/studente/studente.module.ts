import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudenteRoutingModule } from './studente-routing.module';
import { StudenteComponent } from './studente.component';



@NgModule({
  declarations: [StudenteComponent],
  imports: [
    CommonModule,
    SharedModule,
    StudenteRoutingModule,
  ],
  exports: [StudenteComponent],
  bootstrap: [StudenteComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class StudenteModule { }
