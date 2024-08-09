import { createSelector, createFeatureSelector } from '@ngrx/store';
import { FormState } from '../models/form.model';


export const selectFormFeature = createFeatureSelector<FormState>('formState');

export const selectCurrentState = createSelector(
    selectFormFeature,
    (state: FormState) => state?.currentState
);

export const selectCanUndo = createSelector(
    selectFormFeature,
    (state: FormState) => state?.history?.length > 0
);

export const selectCanRedo = createSelector(
    selectFormFeature,
    (state: FormState) => state?.redoStack?.length > 0
);
