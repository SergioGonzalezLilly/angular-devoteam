export interface TaskIf {
    name: string;
    isCompleted: boolean;
}

export class Task implements TaskIf {

    constructor(
        public name: string = '',
        public isCompleted: boolean = false
    ) {}
}