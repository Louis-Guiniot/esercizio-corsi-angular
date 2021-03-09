import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudenteRoutingModule } from './studente-routing.module';
import { StudenteComponent } from './main/studente.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [StudenteComponent],
  imports: [
    CommonModule,
    SharedModule,
    StudenteRoutingModule,
    NgbModule,
  ],
  exports: [StudenteComponent],
  bootstrap: [StudenteComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class StudenteModule { }
