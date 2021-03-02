import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class StudenteService {

  constructor(private store: Store) { }


  createStudent(nome:string,cognome:string,dataNascita:string,sesso:string,idCorso:string){
    this.store.dispatch(createStudent({nome,cognome,dataNascita,sesso,idCorso}))

  }
}
