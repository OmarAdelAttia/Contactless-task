export interface FormDataModel {
    name: string;
    age: number;
    gender: string;
    subscribe: boolean;
}

export interface FormState {
    currentState: FormDataModel;
    history: FormDataModel[];
    redoStack: FormDataModel[];
}