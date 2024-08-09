export interface FormData {
    name: string | undefined;
    age: number | undefined;
    gender: string | undefined;
    subscribe: boolean | undefined;
}

export interface FormState {
    currentState: any;
    history: any[];
    redoStack: any[];
}