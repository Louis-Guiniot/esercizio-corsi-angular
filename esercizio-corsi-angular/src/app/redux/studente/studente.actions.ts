import { createAction, props } from "@ngrx/store";
import { Response } from "src/app/core/model/Response.interface";
//import { Response } from '../../model/Response.interface.ts';

export const initStudents = createAction('[Student] init students', props<{response: Response}>());
// export const deleteStudent = createAction('[Student] delete student',props<{id: string}>());
// export const updateStudent = createAction('[Student] find-update', props<{id:string, ragioneSociale:string, partitaIva:string, email:string, sede: string, residenza: string, name:string}>())
 export const createStudent = createAction('[Student] creazione student', props<{nome:string,cognome:string,dataNascita:string,sesso:string,idCorso:string}>());
// export const retreiveAllStudents = createAction('[Student] student');