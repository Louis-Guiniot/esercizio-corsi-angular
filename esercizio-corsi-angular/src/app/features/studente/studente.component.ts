import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studente',
  templateUrl: './studente.component.html',
  styleUrls: ['./studente.component.scss']
})
export class StudenteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("sono in studente");
  }
}
