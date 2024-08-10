import { createReducer, on } from '@ngrx/store';
import { FormState } from '../models/form.model';
import { setFormState, undo, redo } from './form.actions';

// Initial state of the form with empty fields, empty history, and redo stack
export const initialState: FormState = {
    currentState: {
        name: '',
        age: 0,
        gender: '',
        subscribe: false
    },
    history: [],
    redoStack: []
};

// Reducer to handle form actions
export const _formReducer = createReducer(
    initialState,

    // Handle setting a new form state and updating history, clearing redo stack
    on(setFormState, (state, { formState }) => ({
        ...state,
        currentState: formState,
        history: [...state?.history, state?.currentState],
        redoStack: []
    })),

    // Handle undo action by moving the last state from history to redo stack
    on(undo, state => {
        const history = [...state.history];
        const previousState = history.pop()!;
        return {
            ...state,
            currentState: previousState,
            history,
            redoStack: [state?.currentState, ...state?.redoStack]
        };
    }),

    // Handle redo action by moving the last state from redo stack back to history
    on(redo, state => {
        const redoStack = [...state.redoStack];
        const nextState = redoStack.shift()!;
        return {
            ...state,
            currentState: nextState,
            history: [...state.history, state.currentState],
            redoStack
        };
    })
);

// Wrapper function for the reducer
export function formReducer(state: any, action: any) {
    return _formReducer(state, action);
}
