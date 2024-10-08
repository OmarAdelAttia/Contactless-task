import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCanRedo, selectCanUndo, selectCurrentState } from '../../shared/store/form.selectors';
import { redo, setFormState, undo } from '../../shared/store/form.actions';
import { FormState } from '../../shared/models/form.model';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  // gender list to make the form more dynamic
  genderList = signal([
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
  ]);

  // Initialize reactive form with validators
  form = new FormGroup({
    name: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(3)
      ]
    }),
    age: new FormControl(0, {
      validators: [
        Validators.required,
        Validators.minLength(2)
      ]
    }),
    gender: new FormControl('', {
      validators: [
        Validators.required,
      ]
    }),
    subscribe: new FormControl(false, {}),
  });

  // Observables for undo/redo actions
  canUndo$: Observable<boolean>;
  canRedo$: Observable<boolean>;

  constructor(private store: Store) {

    // Set up undo/redo observables
    this.canUndo$ = this.store.select(selectCanUndo);
    this.canRedo$ = this.store.select(selectCanRedo);

    // Sync form with store state without triggering value changes
    this.store.select(selectCurrentState).subscribe(state => {
      this.form.setValue(state, { emitEvent: false });
    });

    // Dispatch form value changes to the store
    this.form.valueChanges.subscribe(value => {
      this.store.dispatch(setFormState({ formState: value }));
    });
  }

  // Dispatch undo action
  undo() {
    this.store.dispatch(undo());
  }

  // Dispatch redo action
  redo() {
    this.store.dispatch(redo());
  }

  // Log form and reset on submit
  onSubmit() {
    console.log(this.form);
    this.form.reset();
  }

}
