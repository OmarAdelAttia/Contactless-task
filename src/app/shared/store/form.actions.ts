import { createAction, props } from '@ngrx/store';

export const setFormState = createAction(
    '[Form] Set Form State',
    props<{ formState: any }>()
);

export const undo = createAction('[Form] Undo');
export const redo = createAction('[Form] Redo');

