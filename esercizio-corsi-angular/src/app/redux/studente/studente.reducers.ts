import {Action, ActionReducer, createReducer, on } from "@ngrx/store";
import { Student } from "src/app/core/model/Student.interface";
import { initStudents } from "./student.actions";


export interface StudentState {
    students: Student[];
}

export const initialState: StudentState = {
    students: [],
    
};

export const studentsReducer = createReducer(
    initialState,
    on(initStudents, (state, { response }) => ({ ...state, students: response.result })),
  
    
);
//----//
export function reducer(state: StudentState, action: Action) {
    return studentsReducer(state, action);
}