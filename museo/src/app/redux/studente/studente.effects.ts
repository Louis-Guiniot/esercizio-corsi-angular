import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable } from "rxjs";
import { switchMap, map, tap } from "rxjs/operators";
import { HttpCommunicationsService } from "src/app/core/HttpCommunications/http-communications.service";
import { Response } from '../../core/model/Response.interface';
import { Action } from "@ngrx/store";
import { createStudent, initStudents, retreiveAllStudents } from "./studente.actions";

@Injectable()
export class CustomerEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) { }

    retreiveAllStudents(): Observable<Response> {
        return this.http.retrieveGetCall<Response>("studenti/findAll");
    }

    
    createStudent(nome:string,cognome:string,dataNascita:string,sesso:string,idCorso:string): Observable<Response>{
        return this.http.retrievePostCall<Response>('studenti/create',{nome,cognome,dataNascita,sesso,idCorso});
    }

    // findUpdateCustomer(id:string, ragioneSociale:string, partitaIva:string, email:string, sede: string, residenza: string, name:string){
    //     return this.http.retrievePostCall<Response>('customer/update',{id, ragioneSociale, partitaIva,email,sede,residenza,name});
    // }

    // deleteCustomer(id: string): Observable<Response>{
    //     console.log(this.http.retrievePostCall<Response>('customer/delete',{id}));
    //     return this.http.retrievePostCall<Response>('customer/delete',{id});
    // }
    //id:string, ragioneSociale:string, partitaIva:string, email:string, sede: string, residenza: string, name:string
    // findUpdateCustomer$: Observable<Action> = createEffect(() => this.actions$.pipe(
    //     ofType(updateCustomer),
    //     switchMap((action) => this.findUpdateCustomer(
    //         action.id,
    //         action.ragioneSociale,
    //         action.partitaIva,
    //         action.email,
    //         action.sede,
    //         action.residenza,
    //         action.name).pipe(
    //         map((response) => initCustomers({ response }))
    //         ,tap(()=>this.router.navigateByUrl('/redirectcustomer'))
    //     ))
    // ));

    // deleteCustomer$: Observable<Action> = createEffect(() => this.actions$.pipe(
    //     ofType(deleteCustomer),
    //     switchMap((action) => this.deleteCustomer(
    //         action.id).pipe(
    //         map((response) => initCustomers({ response }))
    //         ,tap(()=>this.router.navigateByUrl('/redirectcustomer'))
    //     ))
    // ));

    getAllCustomers$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retreiveAllStudents),
        switchMap(() => this.retreiveAllStudents().pipe(
            map((response) => initStudents({ response }))
        ))
    ));

    createStudent$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(createStudent),
        switchMap((action) => this.createStudent(
            action.nome,
            action.cognome,
            action.dataNascita,
            action.sesso,
            action.idCorso).pipe(
            map((response) => initStudents({ response }))
            ,tap(()=>this.router.navigateByUrl('/student'))
        ))
    ));
}