import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbCalendar, NgbDate, NgbDateStruct, NgbInputDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { StudenteService } from '../services/studente.service';

@Component({
  selector: 'app-studente',
  templateUrl: './studente.component.html',
  styleUrls: ['./studente.component.scss']
})
export class StudenteComponent implements OnInit {

  createStudent : FormGroup

  constructor(private fb: FormBuilder, private studenteService: StudenteService) {
      
  }

  ngOnInit(): void {

    this.createStudent = this.fb.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      dataNascita: ['', Validators.required],
      sesso: ['', Validators.required],
      idcorso: ['', Validators.required],
    })
    
    console.log("sono in studente")
  }
}
