import { createSelector, createFeatureSelector } from '@ngrx/store';
import { FormState } from '../models/form.model';

// Select the 'formState' feature from the store
export const selectFormFeature = createFeatureSelector<FormState>('formState');

// Selector to get the current state of the form
export const selectCurrentState = createSelector(
    selectFormFeature,
    (state: FormState) => state?.currentState
);

// Selector to check if the undo action is possible
export const selectCanUndo = createSelector(
    selectFormFeature,
    (state: FormState) => state?.history?.length > 0
);

// Selector to check if the redo action is possible
export const selectCanRedo = createSelector(
    selectFormFeature,
    (state: FormState) => state?.redoStack?.length > 0
);
