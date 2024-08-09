import { createReducer, on } from '@ngrx/store';
import { FormState } from '../models/form.model';
import { setFormState, undo, redo } from './form.actions';

export const initialState: FormState = {
    currentState: {
        name: '',
        age: null,
        gender: '',
        subscribe: false
    },
    history: [],
    redoStack: []
};

export const _formReducer = createReducer(
    initialState,
    on(setFormState, (state, { formState }) => ({
        ...state,
        currentState: formState,
        history: [...state?.history, state?.currentState],
        redoStack: []
    })),
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

export function formReducer(state: any, action: any) {
    return _formReducer(state, action);
}
