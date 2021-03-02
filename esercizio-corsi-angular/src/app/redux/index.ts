import { ActionReducerMap } from '@ngrx/store';
import { studentsReducer, StudentState } from './studente/studente.reducers';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';


export interface AppState{
    router: RouterReducerState<any>;
    studentState: StudentState;
    
}

export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer,
    studentState: studentsReducer
    
}