import { createAction, props } from '@ngrx/store';

// Action to set the form state with a payload
export const setFormState = createAction(
    '[Form] Set Form State',
    props<{ formState: any }>()
);

// Action to undo the last state change
export const undo = createAction('[Form] Undo');

// Action to redo the last undone state change
export const redo = createAction('[Form] Redo');

