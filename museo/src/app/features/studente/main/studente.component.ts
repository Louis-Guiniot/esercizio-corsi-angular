import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbCalendar, NgbDate, NgbDateStruct, NgbInputDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Student } from 'src/app/core/model/Student.interface';
import { selectStudents } from 'src/app/redux/studente';
import { StudenteService } from '../services/studente.service';

@Component({
  selector: 'app-studente',
  templateUrl: './studente.component.html',
  styleUrls: ['./studente.component.scss']
})
export class StudenteComponent implements OnInit {

  createStudent : FormGroup
  updateStudent : FormGroup

  closeResult = ''

  // paginazione
  collectionSize:number
  page = 1;
  pageSize = 2;

  constructor(private fb: FormBuilder, private studenteService: StudenteService, private modalService: NgbModal, private store: Store) {
    console.log(this.studenteService.retreiveAllStudents())
  }

  open(content) {
    this.modalService.open(content, { size: 'm'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {

    console.log("sono in studente")

    this.createStudent = this.fb.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      dataNascita: ['', Validators.required],
      sesso: ['', Validators.required],
      idcorso: ['', Validators.required],
    })

    this.updateStudent = this.fb.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      dataNascita: ['', Validators.required],
      sesso: ['', Validators.required],
      idcorso: ['', Validators.required],
    })
    
  }

  get students(): Observable<Student[]> {
    return this.store.pipe(select(selectStudents));
  }

  stuCreate(){
    console.log(this.createStudent.value.nome+" nome")
    console.log("creazione studente iniziata")
  }

  stuUpdate(){
    console.log("update studente iniziata")
  }

  stuDelete(){
    console.log("eliminazione studente iniziata")
  }
}
