import { Params } from "@angular/router";
import { createSelector } from "@ngrx/store";
import { AppState } from "..";
import { StudentState } from "./student.reducers";

export const selectStudentState = (state: AppState) => state.studentState;

export const selectStudents = createSelector(
    selectStudentState,
    (state: StudentState) => state.students
);
// export const selectTotalStudents = createSelector(
//     selectStudentState,
//     (state: StudentState) => state.students.length
// );

export const getCurrentStudent = createSelector(
    selectStudentState,
    (state: StudentState, params: Params) => state.students.find(item => item.id === Number(params['id']))
);