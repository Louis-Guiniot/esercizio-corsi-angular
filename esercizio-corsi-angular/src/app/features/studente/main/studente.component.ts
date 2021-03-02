import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(private fb: FormBuilder, private modalService: NgbModal) {
      
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
    
    console.log("sono in studente")
  }
}
